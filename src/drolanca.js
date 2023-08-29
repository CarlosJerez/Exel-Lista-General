const path = require("path");
const leerExcel = require("./libs/exel");

const drolancaList = leerExcel(
  path.join(__dirname, "..", "exelDrolanca", "exelDrolanca.xlsx")
);
module.exports = drolancaList;
