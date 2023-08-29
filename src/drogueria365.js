const path = require("path");
const leerExcel = require("./libs/exel");

const drogueria365List = leerExcel(
  path.join(__dirname, "..", "exelDrogueria365", "exelDrogueria365.xlsx")
);
module.exports = drogueria365List;