const <%=PascalCaseName%>ViewModel = require("./<%=OriginalName%>-view-model");

const viewModel = new <%=PascalCaseName%>ViewModel();

function onNavigatingTo(args) {
    /* ***********************************************************
     * Use the "onNavigatingTo" handler to initialize data for the whole
     * signup layout as a whole.
     *************************************************************/

    const page = args.object;

    page.bindingContext = viewModel;
}

/* ***********************************************************
* TODO: Implement Facebook sign up.
*************************************************************/
function onSignupFacebookButtonTap() {
}

/* ***********************************************************
* TODO: Implement Google login.
*************************************************************/
function onSignupGoogleButtonTap() {
}

function onSignupButtonTap() {
    viewModel.signup();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSignupFacebookButtonTap = onSignupFacebookButtonTap;
exports.onSignupGoogleButtonTap = onSignupGoogleButtonTap;
exports.onSignupButtonTap = onSignupButtonTap;
