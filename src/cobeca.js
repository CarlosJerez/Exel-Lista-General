const cobeca = require('../jsonCobeca/cobeca.json')

const cobecaList = cobeca.map(item => {
    //console.log(item)
    const itemR = {
        "cod_articulo": item.cod_articulo,
        "cod_barra": item.cod_barra,
        "desc_articulo": item.desc_articulo,
        "proveedor": item.proveedor.descripcion,
        "porcentaje": item.porcentaje_cobeca,
        "precio": item.monto_final,
        "diasCredito": item.dias,
        "componenteBase": item.componenteBase.descripcion,
        'existencia': item.existencia,
    }
    return itemR
})

module.exports = cobecaList

/*
COBECA NORMAL

const cobecaList = cobeca.map(item => {
    //console.log(item)
    const itemR = {
        "cod_articulo": item.cod_articulo,
        "cod_barra": item.cod_barra,
        "desc_articulo": item.desc_articulo,
        "proveedor": item.proveedor.descripcion,
        "porcentaje": item.porcentaje_cobeca,
        "precio": item.monto_final,
        "diasCredito": item.dias,
        "componenteBase": item.componenteBase.descripcion,
        'existencia': item.existencia,
    }
    return itemR
})

COBECA EXPO

const cobecaList = cobeca.map(item => {
    //console.log(item)
    const itemR = {
        "cod_articulo": item.codArticulo,
        "cod_barra": item.codBarra,
        "desc_articulo": item.descArticulo,
        "proveedor": item.proveedor.descripcion,
        "porcentaje": item.porcentajeCobeca,
        "precio": item.precioNeto,
        "diasCredito": item.diasCredito,
        "componenteBase": item.componenteBase.descripcion,
        'existencia': item.existencia,
    }
    return itemR
})


*/