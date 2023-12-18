// lib/dom.js

const { chain } = require("./fn")

const createDOMMethods = (doc) => {
  return {
    first(selector) {
      return chain([
        doc.querySelector(selector)
      ]);
    },
    all(selector) {
      return chain(Array.from(
        doc.querySelectorAll(selector)
      ));
    },
  };
};

module.exports = {
  createDOMMethods,
}  