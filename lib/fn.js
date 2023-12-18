// lib/fn.js

const chain = (...elements) => async (...fns) => {
  let result = [];
  for (const fn of fns) {
    result = await Promise.resolve(fn(elements));
  }
  return result;
}

module.exports = {
  chain
}