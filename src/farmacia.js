const path = require("path");
const leerExcel = require("./libs/exel");

const farmaciaList = leerExcel(
  path.join(__dirname, "..", "exelFarmacia", "exelFarmacia.xlsx")
);

module.exports = farmaciaList;
