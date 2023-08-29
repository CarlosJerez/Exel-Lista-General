const path = require("path");
const leerExcel = require("./libs/exel");

const anteriorList = leerExcel(
  path.join(__dirname, "..", "exelAnterior", "exelAnterior.xlsx")
);
module.exports = anteriorList;