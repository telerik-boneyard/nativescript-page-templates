const observableModule = require("data/observable");

function SignupViewModel() {
    const viewModel = observableModule.fromObject({
        name: "",
        email: "",
        password: "",

        /* ***********************************************************
        * TODO: Implement sign up.
        *************************************************************/
        signup: function () {
        }
    });

    return viewModel;
}

module.exports = SignupViewModel;
