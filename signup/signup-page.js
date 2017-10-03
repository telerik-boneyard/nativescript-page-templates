const <%= PascalCaseName %>ViewModel = require("./<%= OriginalName %>-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new <%= PascalCaseName %>ViewModel();
}

function onSignupWithSocialProvider() {
    /* ***********************************************************
    * For sign up with social provider you can add your custom logic or
    use NativeScript plugin for sign up with Facebook
    https://github.com/NativeScript/nativescript-facebook
    *************************************************************/
}

function onSignupButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

    bindingContext.signUp();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSignupFacebookButtonTap = onSignupFacebookButtonTap;
exports.onSignupGoogleButtonTap = onSignupGoogleButtonTap;
exports.onSignupButtonTap = onSignupButtonTap;
