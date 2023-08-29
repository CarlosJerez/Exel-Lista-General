const path = require("path");
const leerExcel = require("./libs/exel");

const drofarzucaList = leerExcel(
  path.join(__dirname, "..", "exelDrofarzuca", "exelDrofarzuca.xlsx")
);
module.exports = drofarzucaList;