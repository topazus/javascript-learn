const random = (length = 8) => {
  return Math.random().toString(36).substring(2, length);
};

console.log(random()); // bb325d9f
console.log(random(6)); // e51d83
console.log(random(10)); // e84c416cc7
console.log(random(20)); // ee16dfc68e361
