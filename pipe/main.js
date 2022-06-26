import assert from "node:assert/strict";
import _, { filter, map } from "underscore";

assert.equal("1.2" |> Number(%), 1.2);
console.log(1 |> % + 1);

var obj = { first_name: "bob", last_name: "smith" };
var str =
  obj
  |> do {
    var { first_name, last_name } = %;
    first_name + " " + last_name;
  };
console.log(str);

var str = obj |> %.first_name + " " + %.last_name;
console.log(str);

var str =
  obj |> (({ first_name, last_name }) => first_name + " " + last_name)(%);
console.log(str);

var testPlus = () => {
  assert.equal(3 + 4, 7);
};
console.log(testPlus);
console.log(testPlus.name);

testPlus |>
// set name property as writable
Object.defineProperties(%, { name: { writable: true } })
|> Object.assign(%, {
  name: "Test the plus operator",
});
console.log(testPlus);
console.log(testPlus.name);

// prefix mutiline string with prefix
function prefixLines(str, prefix) {
  return str
    .split("\n")
    .map((s) => `${prefix}${s}`)
    .join("\n");
}

var str =
  String.raw`
Text with
${3} indented
lines
` |> prefixLines(%, "> ");
console.log(str);

var str = "hello\nworld\n" |> prefixLines(%, "> ");
console.log(str);

// escapes an arbitrary text so that it is matched verbatim if we put it inside a regular expression:
function escapeForRegExp(str) {
  // escape all syntax characters.
  return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"); // (A)
}
assert.equal(escapeForRegExp("[yes?]"), String.raw`\[yes\?\]`);
assert.equal(escapeForRegExp("_g_"), String.raw`_g_`);

var regexOperators =
  ["*", "+", "[", "]"].map((ch) => escapeForRegExp(ch)).join("")
  |> "[" + % + "]"
  |> new RegExp(%);
console.log(regexOperators);

// add flags to regular expression
// new RegExp('pattern', 'flags')
// g	Global	Makes the expression search for all occurrences.
// u	Unicode	Makes the expression assume individual characters as code points,
// not code units, and thus match 32-bit characters as well.
var regExp = new RegExp(escapeForRegExp(":-)"), "ug");
console.log(regExp);
assert.equal(":-) :-) :-)".replace(regExp, "t"), "t t t");
assert.equal("a a a".replace(/a/gu, "t"), "t t t");

var input_list = [1, 2, 3, 4, 5, 6];
var result_set =
  input_list
  |> filter(%, (num) => {
    return num % 2 == 0;
  })
  |> map(%, (num) => {
    return num * num;
  })
  |> new Set(%);
console.log(result_set);
