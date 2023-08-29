function insertJson(
  farmaciaList,
  drogueriaList,
  llaveName,
  drogueriaName
) {
  return (lista = farmaciaList.map((item) => {
    const drogueriaItem = drogueriaList.filter(
      (drogueriaItem) => drogueriaItem[llaveName] == item.Codigo
    );
    item[drogueriaName] = drogueriaItem[0];
    return item;
  }));
}

module.exports = insertJson;
