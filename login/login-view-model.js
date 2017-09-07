const observableModule = require("data/observable");

function <%=PascalCaseName%>ViewModel() {
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

module.exports = <%=PascalCaseName%>ViewModel;
