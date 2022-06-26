import * as math from "mathjs"
const d = math.matrix([
  [1, 2],
  [3, 4],
])
var res = math.dotPow(d, 2)
console.log(res.subset(math.index(1, 1)))
