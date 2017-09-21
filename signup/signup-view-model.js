const observableModule = require("data/observable");

function <%= PascalCaseNam %>ViewModel() {
    const viewModel = observableModule.fromObject({
        name: "",
        email: "",
        password: "",

        signUp: function () {
            const name = this.name;
            const email = this.email;
            const password = this.password;

            /* ***********************************************************
            * Call your custom signup logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = <%= PascalCaseName %>ViewModel;
