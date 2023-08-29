const path = require("path");
const leerExcel = require("./libs/exel");

const drogueriaAvilaList = leerExcel(
  path.join(__dirname, "..", "exelAvila", "exelAvila.xlsx")
);
module.exports = drogueriaAvilaList;