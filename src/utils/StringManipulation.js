export const toKebabCase = (str) => {
  if (str === str.toUpperCase()) return str.toLowerCase();
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export const findCaseInsensitiveKey = (obj, key) => {
  const target = key.toLowerCase();
  return Object.keys(obj).find((k) => toKebabCase(k) === target);
};

export const formatName = (str) => {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
};
