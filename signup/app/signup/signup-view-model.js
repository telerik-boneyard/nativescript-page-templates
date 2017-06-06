var Observable = require("data/observable").Observable;

function SignupViewModel() {
    var viewModel = new Observable();

    viewModel.name = "";
    viewModel.email = "";
    viewModel.password = "";

    viewModel.signup = function () {
    };

    return viewModel;
}

module.exports = SignupViewModel;