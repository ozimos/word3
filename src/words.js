module.exports = {
  words: (str) => {
    const result = {};
    const arr = str.trim().split(' ');

    arr.forEach((word) => {
      if (result[word]) {
        result[word] += 1;
      } else {
        result[word] = 1;
      }
      return word;
    });
    return result;
  }


};
