const observableModule = require("data/observable");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        password: "",
        username: "",

        /* ***********************************************************
        * TODO: Implement sign in.
        *************************************************************/
        signIn: function () {
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
