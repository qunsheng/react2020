const fs = require("fs");
const path = require("path");

const data_dir = path.join(__dirname, "./data");

if (!fs.existsSync(data_dir)) {
  fs.mkdirSync(data_dir);
}

let json = JSON.stringify(
  { name: "world", action: "say hello" },
  undefined,
  " "
);

fs.writeFileSync(path.join(data_dir, "hello.json"), json, "UTF8");

console.log("save file done!");
