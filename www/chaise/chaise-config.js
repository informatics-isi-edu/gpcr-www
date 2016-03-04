// Configure deployment-specific data here

var chaiseConfig = {
    authnProvider: 'goauth',
    feedbackURL: 'http://goo.gl/forms/f30sfheh4H',
    helpURL: '/using-the-data-explorer/',
    showBadgeCounts: false,
    recordUiGridEnabled: false,
    recordUiGridExportCSVEnabled: true,
    recordUiGridExportPDFEnabled: true,
    customCSS: '/assets/css/chaise.css',
    navbarBrand: '/',
    headTitle: 'GPCR Data Explorer',
    tour: {
      pickRandom: false,
      searchInputAttribute: "Data",
      searchChosenAttribute: "Data Type",
      searchInputValue: "micro",
      extraAttribute: "Mouse Anatomic Source",
      chosenAttribute: "Data Type",
      chosenValue: "Expression microarray - gene"
    }
};
