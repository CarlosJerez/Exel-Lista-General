const path = require("path");
const xl = require("excel4node");
const insertJson = require("./libs/ingresarJson");

let farmaciaList = require("./farmacia");
const precioList = require("./precio");
const exelAnterior = require("./anterior");
const cobecaList = require("./cobeca");
const drolancaList = require("./drolanca");
const drogueriaAvilaList = require("./avila");
const dromarcaList = require("./dromarca");
const drogueria365List = require("./drogueria365");
const drocercaList = require("./drocerca");
const droplusList = require("./droplus");
const drofarzucaList = require("./drofarzuca");
const dromarkoList = require("./dromarko");

//console.log(drofarzucaList);

farmaciaList = insertJson(farmaciaList, cobecaList, "cod_barra", "cobeca");
farmaciaList = insertJson(farmaciaList, drolancaList, "codigo Barras", "drolanca");
farmaciaList = insertJson(farmaciaList, drogueriaAvilaList, "CODIGO", "avila");
farmaciaList = insertJson(farmaciaList, dromarcaList, "PLU", "dromarca");
farmaciaList = insertJson(farmaciaList, drocercaList, "Cod. Barra", "drocerca");
farmaciaList = insertJson(farmaciaList, precioList, "Codigo", "nazareno");
farmaciaList = insertJson(farmaciaList, exelAnterior, "Codigo", "anterior");
farmaciaList = insertJson(farmaciaList, droplusList, " BARRA", "droplus");
farmaciaList = insertJson(farmaciaList, drofarzucaList, " BARRA", "drofarzuca");
farmaciaList = insertJson(farmaciaList, dromarkoList, " BARRA", "dromarko");

let farmaciaListFinal = insertJson(
  farmaciaList,
  drogueria365List,
  " BARRA",
  "drogueria365"
);

//console.log(farmaciaListFinal);

let orden = {
  cod_articulo: 1,
  cod_drolanca: 2,
  cod_drocerca: 3,
  Codigo: 4,
  Descripcion: 5,
  Componente: 6,
  Laboratorio: 7,
  VENTA_ANTERIOR: 8,
  Cantidad_farmacia: 9,
  Existencia_farmacia: 10,
  Precio_farmacia: 11,
  COBECA: 12,
  CANT_COBECA: 13,
  DROLANCA: 14,
  FECHA_DROLANCA: 15,
  CANT_DROLANCA: 16,
  365: 17,
  FECHA_365: 18,
  CANT_365: 19,
  AVILA: 20,
  FECHA_AVILA: 21,
  CANT_AVILA: 22,
  DROMARCA: 23,
  CANT_DROMARCA: 24,
  DROCERCA: 25,
  FECHA_DROCERCA: 26,
  CANT_DROCERCA: 27,
  DROPLUS: 28,
  FECHA_DROPLUS: 29,
  CANT_DROPLUS: 30,
  DROFARZUCA: 31,
  CANT_DROFARZUCA: 32,
  DROMARKO: 33,
  FECHA_DROMARKO: 34,
  CANT_DROMARKO: 35,
};

var wb = new xl.Workbook();
var style = wb.createStyle({
  font: {
    color: "#FF0800",
    size: 12,
  },
});

var ws = wb.addWorksheet("Fallas");

ws.cell(1, orden.cod_articulo).string("cod_articulo");
ws.cell(1, orden.cod_drolanca).string("cod_drolanca");
ws.cell(1, orden.cod_drocerca).string("cod_drocerca");
ws.cell(1, orden.Codigo).string("Codigo");
ws.column(orden.Codigo).setWidth(16);
ws.cell(1, orden.Descripcion).string("Descripcion");
ws.column(orden.Descripcion).setWidth(40);
ws.cell(1, orden.Componente).string("Componente");
ws.cell(1, orden.Laboratorio).string("Laboratorio");
ws.cell(1, orden.VENTA_ANTERIOR).string("VENTA ANTERIOR");
ws.cell(1, orden.Cantidad_farmacia).string("Cantidad(farmacia)").style(style);
ws.cell(1, orden.Existencia_farmacia).string("Existencia(farmacia)").style(style);
ws.cell(1, orden.Precio_farmacia).string("Precio(farmacia)").style(style);
ws.cell(1, orden.COBECA).string("COBECA");
ws.cell(1, orden.CANT_COBECA).string("cantidad");
ws.cell(1, orden.DROLANCA).string("DROLANCA");
ws.cell(1, orden.FECHA_DROLANCA).string("FECHA DROLANCA");
ws.cell(1, orden.CANT_DROLANCA).string("CANT DROLANCA");
ws.cell(1, orden[365]).string("365");
ws.cell(1, orden.FECHA_365).string("FECHA 365");
ws.cell(1, orden.CANT_365).string("CANT 365");
ws.cell(1, orden.AVILA).string("AVILA");
ws.cell(1, orden.FECHA_AVILA).string("FECHA AVILA");
ws.cell(1, orden.CANT_AVILA).string("CANT AVILA");
ws.cell(1, orden.DROMARCA).string("DROMARCA");
ws.cell(1, orden.CANT_DROMARCA).string("CANT DROMARCA");
ws.cell(1, orden.DROCERCA).string("DROCERCA");
ws.cell(1, orden.FECHA_DROCERCA).string("FECHA DROCERCA");
ws.cell(1, orden.CANT_DROCERCA).string("CANT DROCERCA");
ws.cell(1, orden.DROPLUS).string("DROPLUS");
ws.cell(1, orden.FECHA_DROPLUS).string("FECHA DROPLUS");
ws.cell(1, orden.CANT_DROPLUS).string("CANT DROPLUS");
ws.cell(1, orden.DROFARZUCA).string("DROFARZUCA");
ws.cell(1, orden.CANT_DROFARZUCA).string("CANT DROFARZUCA");
ws.cell(1, orden.DROMARKO).string("DROMARKO");
ws.cell(1, orden.FECHA_DROMARKO).string("FECHA DROMARKO");
ws.cell(1, orden.CANT_DROMARKO).string("CANT DROMARKO");

farmaciaListFinal.forEach(function (item, index) {
  ws.cell(index + 2, orden.Codigo).string(`${item.Codigo}`);
  ws.cell(index + 2, orden.Descripcion).string(`${item.Descripcion}`);
  ws.cell(index + 2, orden.Cantidad_farmacia)
    .number(item.Cantidad)
    .style(style);
  ws.cell(index + 2, orden.Existencia_farmacia)
    .number(item.Existencia)
    .style(style);

  let data;

  data = item.nazareno;
  if (data != undefined) {
    if (data.hasOwnProperty("Precio"))
      ws.cell(index + 2, orden.Precio_farmacia)
        .number(data["Precio"])
        .style(style);
  }

  data = item.anterior;
  if (data != undefined) {
    if (data.hasOwnProperty("Venta"))
      ws.cell(index + 2, orden.VENTA_ANTERIOR).number(data["Venta"]);
  }

  data = item.cobeca;
  if (data != undefined) {
    ws.cell(index + 2, orden.cod_articulo).number(data["cod_articulo"]);
    if (data.hasOwnProperty("componenteBase"))
      ws.cell(index + 2, orden.Componente).string(data["componenteBase"]);
    if (data.hasOwnProperty("proveedor"))
      ws.cell(index + 2, orden.Laboratorio).string(data["proveedor"]);
    if (data.hasOwnProperty("precio"))
      ws.cell(index + 2, orden.COBECA).number(data["precio"]);
  }

  data = item.drolanca;
  if (data != undefined) {
    ws.cell(index + 2, orden.cod_drolanca).number(data["Código"]);
    if (data.hasOwnProperty(" Precio Final  "))
      ws.cell(index + 2, orden.DROLANCA).number(data[" Precio Final  "]);
    if (data.hasOwnProperty("F/Venc"))
      ws.cell(index + 2, orden.FECHA_DROLANCA).string(data["F/Venc"]);
    if (data.hasOwnProperty("Laboratorio"))
      ws.cell(index + 2, orden.Laboratorio).string(data["Laboratorio"]);
  }

  data = item.drogueria365;
  if (data != undefined) {
    if (data.hasOwnProperty("  NETO "))
      ws.cell(index + 2, orden[365]).number(data["  NETO "]);
    if (data.hasOwnProperty(" FECHVENC."))
      ws.cell(index + 2, orden.FECHA_365).number(data[" FECHVENC."]);
    if (data.hasOwnProperty(" MARCA"))
      ws.cell(index + 2, orden.Laboratorio).string(data[" MARCA"]);
  }

  data = item.avila;
  if (data != undefined) {
    if (data.hasOwnProperty("PRECIO NETO BOLIVAR DIG."))
      ws.cell(index + 2, orden.AVILA).number(data["PRECIO NETO BOLIVAR DIG."]);
    if (data.hasOwnProperty("FECHA VCTO"))
      ws.cell(index + 2, orden.FECHA_AVILA).number(data["FECHA VCTO"]);
    if (data.hasOwnProperty("LABORATORIO"))
      ws.cell(index + 2, orden.Laboratorio).string(data["LABORATORIO"]);
  }

  data = item.dromarca;
  if (data != undefined) {
    if (data.hasOwnProperty("DESCRIPCION"))
      ws.cell(index + 2, orden.Descripcion).string(data["DESCRIPCION"]);
    if (data.hasOwnProperty("P. NETO"))
      ws.cell(index + 2, orden.DROMARCA).number(data["P. NETO"]);
    if (data.hasOwnProperty("LABORATORIO"))
      ws.cell(index + 2, orden.Laboratorio).string(data["LABORATORIO"]);
  }

  data = item.drocerca;
  if (data != undefined) {
    if (data.hasOwnProperty("Precio Oferta Especial"))
      ws.cell(index + 2, orden.DROCERCA).number(data["Precio Oferta Especial"]);
    if (data.hasOwnProperty("Vence"))
      ws.cell(index + 2, orden.FECHA_DROCERCA).string(data["Vence"]);
    if (data.hasOwnProperty("Código"))
      ws.cell(index + 2, orden.cod_drocerca).string(data["Código"]);
    if (data.hasOwnProperty("Laboratorio"))
      ws.cell(index + 2, orden.Laboratorio).string(data["Laboratorio"]);
  }

  data = item.droplus;
  if (data != undefined) {
    if (data.hasOwnProperty(" NETO"))
      ws.cell(index + 2, orden.DROPLUS).number(data[" NETO"]);
    /*     if (data.hasOwnProperty("FECHA DE VENCIMIENTO "))
      ws.cell(index + 2, orden.FECHA_DROPLUS).number(data["FECHA DE VENCIMIENTO "]); */
  }

  data = item.drofarzuca;
  if (data != undefined) {
    if (data.hasOwnProperty(" NETO"))
      ws.cell(index + 2, orden.DROFARZUCA).number(data[" NETO"]);
    if (data.hasOwnProperty(" MARCA"))
      ws.cell(index + 2, orden.Laboratorio).string(data[" MARCA"]);
  }

  data = item.dromarko;
  if (data != undefined) {
    if (data.hasOwnProperty(" PRECIO BS FINAL  "))
      ws.cell(index + 2, orden.DROMARKO).number(data[" PRECIO BS FINAL  "]);
    if (data.hasOwnProperty(" FECHA DE VENCIMIENTO  "))
      ws.cell(index + 2, orden.FECHA_DROMARKO).string(data[" FECHA DE VENCIMIENTO  "]);
    if (data.hasOwnProperty("  MARCA "))
      ws.cell(index + 2, orden.Laboratorio).string(data["  MARCA "]);
  }
});

const pathExel = path.join(__dirname, "..", "exelFinal", "exelFinal.xlsx");

wb.write(pathExel, function (err, stats) {
  if (err) {
    console.error(err);
  } else {
    console.log("archivo creado " + pathExel);
  }
});
