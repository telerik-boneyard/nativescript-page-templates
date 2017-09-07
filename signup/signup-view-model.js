const observableModule = require("data/observable");

function <%=PascalCaseName%>ViewModel() {
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

module.exports = <%=PascalCaseName%>ViewModel;
