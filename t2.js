const random = (length = 8) => {
  return Math.random().toString(36).substring(2, length)
}

console.log(random())
console.log(random(6))
console.log(random(10))
console.log(random(20))
