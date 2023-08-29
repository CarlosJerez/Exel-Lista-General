const path = require("path");
const leerExcel = require("./libs/exel");

const precioList = leerExcel(
  path.join(__dirname, "..", "exelPrecio", "exelPrecio.xlsx")
);

module.exports = precioList;
