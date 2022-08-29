var Cart = (function () {
    function Cart(user) {
        this.user = user;
        this.store = {};
    }
    Cart.prototype.put = function (id, product) {
    };
    Cart.prototype.get = function (id) {
    };
    return Cart;
}());
var cartJohn = new Cart({ name: "john" });
var cartJay = new Cart({ name: "jay" });
//# sourceMappingURL=class.js.map