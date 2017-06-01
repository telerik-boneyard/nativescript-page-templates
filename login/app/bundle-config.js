if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("login/login-page", function () { return require("./login/login-page"); });
    global.registerModule("home/home-page", function () { return require("./home/home-page"); });
}
