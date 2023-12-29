// test/helpers/file.js

const { join } = require("path");
const { readFileSync } = require("fs");

const root = join(__dirname, "../fixtures");

const loadFixture = (name) => {
  const filePath = join(root, name);
  const content = readFileSync(filePath);
  return content.toString();
}

module.exports = {
  loadFixture,
}