var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade[StarbuksGrade["WELLCOME"] = 0] = "WELLCOME";
    StarbuksGrade[StarbuksGrade["GREEN"] = 1] = "GREEN";
    StarbuksGrade[StarbuksGrade["GOLD"] = 2] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
var getDicound = function (v) {
    switch (v) {
        case StarbuksGrade.WELLCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
};
console.log(getDicound(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);
console.log(StarbuksGrade);
//# sourceMappingURL=enum.js.map