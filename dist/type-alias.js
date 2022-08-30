function createUserAction2() {
    return {
        do: function () { },
        name: "",
    };
}
var UserImpl = (function () {
    function UserImpl() {
    }
    UserImpl.prototype.login = function () {
        throw new Error("Method not implemented.");
    };
    return UserImpl;
}());
function checkUser(user) {
    if (user.login()) {
        return "APPROVED";
    }
    else {
        return "REJECTED";
    }
}
//# sourceMappingURL=type-alias.js.map