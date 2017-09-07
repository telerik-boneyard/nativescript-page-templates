const <%=PascalCaseName%>ViewModel = require("./<%=OriginalName%>-view-model");

const viewModel = new <%=PascalCaseName%>ViewModel();

function onNavigatingTo(args) {
    /* ***********************************************************
     * Use the "onNavigatingTo" handler to initialize data for the whole
     * login layout as a whole.
     *************************************************************/

    const page = args.object;

    page.bindingContext = viewModel;
}

exports.onNavigatingTo = onNavigatingTo;

/* ***********************************************************
* TODO: Implement Facebook login.
*************************************************************/
function onLoginFacebookButtonTap() {
}

/* ***********************************************************
* TODO: Implement Google login.
*************************************************************/
function onLoginGoogleButtonTap() {
}

function onSignInButtonTap() {
    viewModel.signIn();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoginFacebookButtonTap = onLoginFacebookButtonTap;
exports.onLoginGoogleButtonTap = onLoginGoogleButtonTap;
exports.onSignInButtonTap = onSignInButtonTap;
