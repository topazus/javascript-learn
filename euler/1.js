import underscore from "underscore"
import assert from "node:assert/strict"
import * as math from "mathjs"

//
var ls = Array.from(Array(1000), (n, index) => index)
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// ls =[0, 1, ... ,999]
var ls = Array.from({ length: 1000 }, (v, i) => i)

var res = underscore.filter(ls, (x) => x % 3 == 0 || x % 5 == 0)

assert.equal(math.sum(res), 233168)
