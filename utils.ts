// A module is just a file. One script is one module.
//import assert from "node:assert/strict"
import { strict as assert } from "node:assert"
// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

const fib = (n: number) => {
  if (n <= 1) {
    return n
  }
  const res = [0, 1]
}

function fibonacci(num: number) {
  var x0 = 0
  var x1 = 1
  for (let index = 2; index < num; index++) {
    var t = x0
    x0 = x1
    x1 = t + x1
  }
  return x1
}

// num >=2
function fibonacci_seq(num: Number) {
  var fib_seq = [0, 1]
  var x0 = 0
  var x1 = 1
  for (let index = 2; index < num; index++) {
    var t = x0
    x0 = x1
    x1 = t + x1
  }
  return fib_seq
}

let cache = {}
assert(42 === 42)
