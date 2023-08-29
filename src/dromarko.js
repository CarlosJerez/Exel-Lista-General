const path = require("path");
const leerExcel = require("./libs/exel");

const dromarkoList = leerExcel(
  path.join(__dirname, "..", "exelDromarko", "exelDromarko.xlsx")
);
module.exports = dromarkoList;