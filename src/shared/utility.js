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

export const getCollectionFromUrl = (fullUrl) => {
  const apiCollectionRegex = /([a-z]+)(?=\/\d*\/)/g;
  const urlCollection = (apiCollectionRegex.exec(fullUrl))[0];
  return `${urlCollection}`
}

export const filterCollection = (collection, properties, boolForComparison) => {
  const filteredCollection = Object.entries(collection).filter(c => boolForComparison ? properties.includes(c[0]) : !properties.includes(c[0]));
  return filteredCollection;
}

export const randomRgbaGenerator = (valueToMultiply) => {
  const g = Math.floor(Math.random() * valueToMultiply);
  const b = Math.floor(Math.random() * valueToMultiply);
  const r = Math.floor(Math.random() * valueToMultiply);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
}