//6)0 - 100 arası yalnız sadə ədədləri console'da çap edin.

let bool = true;
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; i++) {
    if (i % j === 0) {
      bool = false;
      break;
    }
  }
  if (bool) console.log(i);
  bool = true;
}
