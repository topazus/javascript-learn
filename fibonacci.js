import assert from "node:assert/strict"
import * as math from "mathjs"

// recursive
const fib = (n) => {
  if (n === 0 || n === 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
assert(fib(10) == 55)

// Optimized Recursive Solution
let fib_seq = {}
const fibonacci = (n) => {
  if (n <= 1) {
    return n
  }
  if (fib_seq[n]) {
    return fib_seq[n]
  }
  const result = fibonacci(n - 1) + fibonacci(n - 2)
  fib_seq[n] = result
  return result
}
assert(fibonacci(10) == 55)

const fib_matrix = math.matrix([
  [1, 1],
  [1, 0],
])
function matrix_fib(n) {
  if (n == 0 || n == 1) {
    return n
  }
  var res = math.pow(fib_matrix, n + 1).subset(math.index(1, 1))
  return res
}
assert.equal(matrix_fib(10), 55)
