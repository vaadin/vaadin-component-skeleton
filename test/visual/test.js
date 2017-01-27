gemini.suite('vaadin-element', function(rootSuite) {

  rootSuite.setUrl('/');

  var suites = {
    default: '#default',
    another: '#another'
  };

  for (let suiteName in suites) {
    var suiteSelector = suites[suiteName];

    gemini.suite(suiteName, function(suite) {
      suite
        .setCaptureElements(suiteSelector)
        .capture(suiteName);
    });
  }

});
