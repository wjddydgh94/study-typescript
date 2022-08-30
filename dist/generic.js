function createPromise(x, timeoute) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeoute);
    });
}
createPromise(10, 100).then(function (v) { return console.log(v); });
function createTuple2(v, v2) {
    return [v, v2];
}
var t1 = createTuple2("user1", 1000);
//# sourceMappingURL=generic.js.map