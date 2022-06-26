function prefixLines(str: String, prefix: String) {
  return str
    .split("\n")
    .map((s) => `${prefix}${s}`)
    .join("\n")
}
var a = String.raw`
  Text with
  ${3} indented
  lines
`
console.log(a)
