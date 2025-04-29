const fs = require("fs");

const file = fs.readFileSync("../dataset/metadata.csv", "utf8");
const lines = file.split("\n");

const newLines = lines.map((line, index) => {
  const tmp = line.split("==");
  return tmp[0];
});

const dataFile = newLines.join("\n");

fs.writeFileSync("./val.txt", dataFile, "utf8");
