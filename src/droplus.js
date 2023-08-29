const path = require("path");
const leerExcel = require("./libs/exel");

const droplusList = leerExcel(
  path.join(__dirname, "..", "exelDroplus", "exelDroplus.xlsx")
);
module.exports = droplusList;