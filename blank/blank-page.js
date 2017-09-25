const <%= PascalCaseName %>ViewModel = require("./<%= OriginalName %>-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new <%= PascalCaseName %>ViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
