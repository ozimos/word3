export default (str) => {
  const result = {};
  const arr = str.split(/\s+/);

  if (!arr[0]) {
    arr.shift();
  }
  arr.forEach((word) => {
    if (result[word]) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
    return word;
  });
  return result;
};
