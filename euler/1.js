import _, { map, filter } from "underscore"

import * as math from "mathjs"

let ls = Array.from(Array(1000), (n, index) => index)
var res = _.filter(ls, (x) => x % 3 == 0 || x % 5 == 0)

asserts(math.sum(res) == 233168)
