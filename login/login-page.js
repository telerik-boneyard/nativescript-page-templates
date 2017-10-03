const <%= PascalCaseName %>ViewModel = require("./<%= OriginalName %>-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new <%= PascalCaseName %>ViewModel();
}

function onLoginWithSocialProvider() {
    /* ***********************************************************
    * For log in with social provider you can add your custom logic or
    use NativeScript plugin for log in with Facebook
    https://github.com/NativeScript/nativescript-facebook
    *************************************************************/
}

function onSigninButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

    bindingContext.signIn();
}

function onForgotPasswordTap() {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoginFacebookButtonTap = onLoginFacebookButtonTap;
exports.onLoginGoogleButtonTap = onLoginGoogleButtonTap;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
