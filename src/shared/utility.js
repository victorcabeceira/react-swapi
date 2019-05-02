export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
};

export const getIdFromUrl = (fullUrl) => {
  const idRegex = /(\b\d*\b)(?!\1)/g;
  const urlId = idRegex.exec(fullUrl);
  return urlId[0];
}

export const filterUrl = (fullUrl) => {
  const apiCollectionRegex = /([a-z]+)(?=\/\d*\/)/g;
  const idRegex = /(\b\d*\b)(?!\1)/g;
  const urlCollection = (apiCollectionRegex.exec(fullUrl))[0];
  const urlId = (idRegex.exec(fullUrl))[0];
  return `/${urlCollection}/${urlId}/`
}
