exports.uniqueWordCount = function (str) {
  if (str === "" || str == null) {
    return 0;
  } else {
    let set = new Set(str.split(" "));
    return set.size;
  }
};
