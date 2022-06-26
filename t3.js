const util = require("node:util");

const alpha_numeric =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

var num_to_str = Math.random().toString(36);

var random_str = num_to_str.slice(2, 20);
console.log(num_to_str);
console.log(random_str);
var str1 = Buffer.from(Math.random().toString())
  .toString("base64")
  .substring(1, 20);
console.log(util.format("str: %s", str1));

// To generate an alpha-numeric string, you can pass an integer value between 2
// and 36 to the toString() method called radix
var small_random_str = (length = 8) => {
  return Math.random().toString(36).substring(2, length);
};

var large_random_str = (length = 8) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = "";
  for (let index = 0; index < length; index++) {
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return res;
};

console.log(large_random_str(20));

function randomString(strLength, charSet) {
  var result = [];

  var strLength = strLength || 5;
  var charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (strLength--) {
    result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
  }

  return result.join("");
}
console.log(randomString(10));

function generateRandomString(length) {
  let result = "",
    seeds;
  for (let i = 0; i < length - 1; i++) {
    // Generate seeds array, that will be the bag from where randomly select generated char
    seeds = [
      Math.floor(Math.random() * 10) + 48,
      Math.floor(Math.random() * 25) + 65,
      Math.floor(Math.random() * 25) + 97,
    ];
    // Choise randomly from seeds, convert to char and append to result
    result += String.fromCharCode(seeds[Math.floor(Math.random() * 3)]);
  }
  return result;
}
function generateRandomString2(length) {
  let result = "",
    seeds = [];
  // Generate seeds array, that will be the bag from where randomly select generated char
  for (let index = 0; index < alpha_numeric.length; index++) {
    const char_code = alpha_numeric.charCodeAt(index);
    seeds.push(char_code);
  }
  for (let i = 0; i < length; i++) {
    // Choise randomly from seeds, convert to char and append to result
    result += String.fromCharCode(
      seeds[Math.floor(Math.random() * seeds.length)]
    );
  }
  return result;
}

console.log(util.format("generateRandomString2: %s", generateRandomString2(7)));

const random_map = (len = 8) =>
  [...Array(len)]
    .map((_) => alpha_numeric[Math.floor(Math.random() * alpha_numeric.length)])
    .join("");

const random_reduce = (len = 8) =>
  [...Array(len)].reduce(
    (acc) =>
      (acc += alpha_numeric[Math.floor(Math.random() * alpha_numeric.length)]),
    ""
  );
// create random char list and use reduce to join them
const random_reduce2 = (len = 8) =>
  [...Array(len)]
    .fill("")
    .map((_) => alpha_numeric[Math.floor(Math.random() * alpha_numeric.length)])
    .reduce((x, y) => x + y, "");
console.log(
  util.format(
    "random_map: %s, random_reduce: %s, random_reduce2: %s",
    random_map(),
    random_reduce(),
    random_reduce2()
  )
);

// undefined arrays
var undefined_arr = [...Array(5)];
var undefined_arr = Array(5).fill();
