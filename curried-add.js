function curriedAdd(total) {
  let sum = total;

  function add(num) {
    if (num) {
      sum = sum + num;
      return add;
    }

    return sum;
  }

  if (!total) {
    return 0;
  }

  return add;
}

module.exports = { curriedAdd };
