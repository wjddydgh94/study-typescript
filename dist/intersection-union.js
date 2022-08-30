var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createUserAction(u, a) {
    return __assign(__assign({}, u), a);
}
var u = createUserAction({ name: "jay" }, { do: function () { } });
function compare(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.localeCompare(y);
    }
    throw Error("not supported type");
}
var v = compare("a", 1);
function isAction(v) {
    return v.do !== undefined;
}
function process(v) {
    if (isAction(v)) {
        v.do();
    }
    else {
        console.log(v.name);
    }
}
//# sourceMappingURL=intersection-union.js.map