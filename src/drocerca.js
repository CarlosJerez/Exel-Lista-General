const path = require("path");
const leerExcel = require("./libs/exel");

const drocercaList = leerExcel(
  path.join(__dirname, "..", "exelDrocerca", "exelDrocerca.xlsx")
);
module.exports = drocercaList;