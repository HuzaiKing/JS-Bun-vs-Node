// const packageFile=Bun.file("package.json");
// const textContents=await packageFile.text();
// console.log(textContents)
// Bun.write("index.html","This text is from Bun Compatibility")
const fs=require("fs/promises");
const fileContent=await fs.readFile("package.json","utf-8");
console.log(fileContent)
fs.writeFile("index.html","The text is using fs Node Package")