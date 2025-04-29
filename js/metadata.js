const fs = require("fs");

const file = fs.readFileSync("../dataset/metadata.csv", "utf8");
const lines = file.split("\n");

const newLines = lines.map((line, index) => {
  const tmp = line.split("==");
  return tmp[0];
});

console.log(newLines.join("\n"));

const newFileLines = newLines.map((line, index) => {
  const newLineMels = line.replace("wavs", "mels");
  const newLineExt = newLineMels.replace("wav", "npy");

  return `${line.replace(".wav", "")}|${newLineExt}`;
});

const dataFile = newFileLines.join("\n");

fs.writeFileSync("./metadata_mel.csv", dataFile, "utf8");
