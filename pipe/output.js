var first_name, last_name, _ref, _ref2, _ref3, _ref4, _ref5;

import assert from "node:assert/strict";
import _, { filter, map } from "underscore";
assert.equal(Number("1.2"), 1.2);
console.log(1 + 1);
var obj = {
  first_name: "bob",
  last_name: "smith"
};
var str = (({
  first_name,
  last_name
} = obj), first_name + " " + last_name);
console.log(str);
var str = (_ref = obj, _ref.first_name + " " + _ref.last_name);
console.log(str);

var str = (({
  first_name,
  last_name
}) => first_name + " " + last_name)(obj);

console.log(str);

var testPlus = () => {
  assert.equal(3 + 4, 7);
};

console.log(testPlus);
console.log(testPlus.name);
// set name property as writable
_ref2 = Object.defineProperties(testPlus, {
  name: {
    writable: true
  }
}), Object.assign(_ref2, {
  name: "Test the plus operator"
});
console.log(testPlus);
console.log(testPlus.name); // prefix mutiline string with prefix

function prefixLines(str, prefix) {
  return str.split("\n").map(s => `${prefix}${s}`).join("\n");
}

var str = prefixLines(String.raw`
Text with
${3} indented
lines
`, "> ");
console.log(str);
var str = prefixLines("hello\nworld\n", "> ");
console.log(str); // escapes an arbitrary text so that it is matched verbatim if we put it inside a regular expression:

function escapeForRegExp(str) {
  // escape all syntax characters.
  return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"); // (A)
}

assert.equal(escapeForRegExp("[yes?]"), String.raw`\[yes\?\]`);
assert.equal(escapeForRegExp("_g_"), String.raw`_g_`);
var regexOperators = (_ref3 = ["*", "+", "[", "]"].map(ch => escapeForRegExp(ch)).join(""), new RegExp("[" + _ref3 + "]"));
console.log(regexOperators); // add flags to regular expression
// new RegExp('pattern', 'flags')
// g	Global	Makes the expression search for all occurrences.
// u	Unicode	Makes the expression assume individual characters as code points,
// not code units, and thus match 32-bit characters as well.

var regExp = new RegExp(escapeForRegExp(":-)"), "ug");
console.log(regExp);
assert.equal(":-) :-) :-)".replace(regExp, "t"), "t t t");
assert.equal("a a a".replace(/a/gu, "t"), "t t t");
var input_list = [1, 2, 3, 4, 5, 6];
var result_set = (_ref5 = map(filter(input_list, num => {
  return num % 2 == 0;
}), num => {
  return num * num;
}), (_ref4 = new Set(_ref5), console.log(_ref4)));
