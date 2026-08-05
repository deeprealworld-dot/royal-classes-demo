import fs from "fs";
import zlib from "zlib";

function crc32(buf) {
  const table = crc32.table || (crc32.table = (() => {
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      t[i] = c >>> 0;
    }
    return t;
  })());

  let crc = 0xffffffff;
  for (const b of buf) {
    crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const chunk = Buffer.alloc(12 + data.length);
  chunk.writeUInt32BE(data.length, 0);
  chunk.write(type, 4, "ascii");
  data.copy(chunk, 8);
  const crc = crc32(Buffer.concat([Buffer.from(type, "ascii"), data]));
  chunk.writeUInt32BE(crc, 8 + data.length);
  return chunk;
}

function createPNG(width, height, pixels) {
  const rawData = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 4 + 1);
    rawData[rowStart] = 0;
    pixels.copy(rawData, rowStart + 1, y * width * 4, (y + 1) * width * 4);
  }

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", Buffer.from([
      (width >>> 24) & 0xff,
      (width >>> 16) & 0xff,
      (width >>> 8) & 0xff,
      width & 0xff,
      (height >>> 24) & 0xff,
      (height >>> 16) & 0xff,
      (height >>> 8) & 0xff,
      height & 0xff,
      8,
      6,
      0,
      0,
      0,
    ])),
    pngChunk("IDAT", zlib.deflateSync(rawData)),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
  return png;
}

function createICO(pngBuffer, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width, 0);
  entry.writeUInt8(height, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(6 + 16, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

const width = 24;
const height = 24;
const pixels = Buffer.alloc(width * height * 4);
const background = [0xd2, 0x00, 0x1a, 0xff];
const white = [0xff, 0xff, 0xff, 0xff];

for (let i = 0; i < pixels.length; i += 4) {
  pixels.set(background, i);
}

const R = [
  "11110",
  "10001",
  "10001",
  "11110",
  "10100",
  "10010",
  "10001",
  "10001",
  "10001",
];
const C = [
  "01110",
  "10001",
  "10000",
  "10000",
  "10000",
  "10000",
  "10001",
  "01110",
  "00000",
];

function drawChar(pattern, originX, originY, scale = 2) {
  for (let y = 0; y < pattern.length; y++) {
    for (let x = 0; x < pattern[y].length; x++) {
      if (pattern[y][x] !== "1") continue;
      for (let sy = 0; sy < scale; sy++) {
        for (let sx = 0; sx < scale; sx++) {
          const px = originX + x * scale + sx;
          const py = originY + y * scale + sy;
          const idx = (py * width + px) * 4;
          pixels.set(white, idx);
        }
      }
    }
  }
}

drawChar(R, 3, 5);
drawChar(C, 13, 5);

const png = createPNG(width, height, pixels);
const ico = createICO(png, width, height);
fs.writeFileSync("public/favicon.ico", ico);
console.log("favicon.ico generated");
