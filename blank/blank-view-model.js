const observableModule = require("tns-core-modules/data/observable");

function <%= PascalCaseName %>ViewModel() {
    const viewModel = observableModule.fromObject({});

    return viewModel;
}

module.exports = <%= PascalCaseName %>ViewModel;
