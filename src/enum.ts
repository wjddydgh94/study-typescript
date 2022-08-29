enum StarbuksGrade {
  WELLCOME,
  GREEN,
  GOLD,
}

const getDicound = (v: StarbuksGrade): number => {
  switch (v) {
    case StarbuksGrade.WELLCOME:
      return 0;
    case StarbuksGrade.GREEN:
      return 5;
    case StarbuksGrade.GOLD:
      return 10;
  }
};

console.log(getDicound(StarbuksGrade.GREEN)); // 5
console.log(StarbuksGrade.GREEN); // 1

console.log(StarbuksGrade);
/**
 * {
 *   "0": "WELLCOME",
 *   "1": "GREEN",
 *   "2": "GOLD",
 *   "WELLCOME": 0,
 *   "GREEN": 1,
 *   "GOLD": 2
 * }
 */
