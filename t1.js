import underscore from "underscore"

var res = underscore.map([1, 2, 3], function (num) {
  return num * 3
})
console.log(res)
