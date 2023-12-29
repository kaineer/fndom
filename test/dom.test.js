// test/dom.test.js

const { createDOMMethods } = require("../lib/dom");
const { JSDOM } = require("jsdom");

const { suite } = require("uvu");
const assert = require("uvu/assert");

const dom = suite("dom");

const { loadFixture } = require("./helpers/file");
const code = loadFixture("dom/index.html");

dom.before((ctx) => {
  const jsdom = new JSDOM(code);
  const doc = jsdom.window.document;
  const { first, all } = createDOMMethods(doc);

  Object.assign(ctx, { first, all });
});

dom("first is a fn", ({ first }) =>  assert.type(first, "function"));
dom("all is a fn", ({ all }) =>  assert.type(all, "function"));

dom.run();