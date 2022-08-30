var D = (function () {
    function D() {
    }
    D.prototype.add = function (v) {
        throw new Error("Method not implemented.");
    };
    D.prototype.get = function () {
        throw new Error("Method not implemented.");
    };
    return D;
}());
var LocalDB = (function () {
    function LocalDB(localStroageKey) {
        this.localStroageKey = localStroageKey;
    }
    LocalDB.prototype.add = function (v) {
        localStorage.setItem(this.localStroageKey, v.serialize());
    };
    LocalDB.prototype.get = function () {
        var v = localStorage.getItem(this.localStroageKey);
        return v ? JSON.parse(v) : null;
    };
    return LocalDB;
}());
var cart1 = {
    getItem: function () {
        return {
            m: "",
        };
    },
};
cart1.getItem();
//# sourceMappingURL=generic2.js.map