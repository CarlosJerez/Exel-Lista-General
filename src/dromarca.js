const path = require("path");
const leerExcel = require("./libs/exel");

const dromarcaList = leerExcel(
  path.join(__dirname, "..", "exelDromarca", "exelDromarca.xlsx")
);
module.exports = dromarcaList;