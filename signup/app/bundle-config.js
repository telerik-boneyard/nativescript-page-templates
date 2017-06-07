if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    //register application modules
    global.registerModule("signup/signup-page", function () { return require("./signup/signup-page"); });
}
