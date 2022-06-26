// A module is just a file. One script is one module.
//import assert from "node:assert/strict"
import { strict as assert } from "node:assert"

import * as math from "mathjs"
// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

// recursive
const fib = (n: number): number => {
  if (n === 0 || n === 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
//console.log(fib(10))
assert(fib(10) == 55)

function fibonacci(num: number): number {
  if (num <= 1) {
    return num
  }
  var a = 0
  var b = 1
  for (let index = 2; index <= num; index++) {
    var t = a
    a = b
    b = t + b
  }
  return b
}
assert(fibonacci(10) == 55)

// cannot gurantee exact number
const fib2 = (n: number): number => {
  const res =
    ((1 + Math.sqrt(5)) ** n - (1 - Math.sqrt(5)) ** n) /
    (Math.sqrt(5) * 2 ** n)

  return Math.floor(res)
}
assert(fib2(40) == 102334155)
