gemini.suite('vaadin-element', function(rootSuite) {
  function wait(actions, find) {
    actions.wait(5000);
  }

  function goToAboutBlank(actions, find) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(function(window) {
      window.location.href = 'about:blank'; // just go away, please!
    });
  }

  rootSuite
    .before(wait)
    .after(goToAboutBlank);

  gemini.suite('default-tests', function(suite) {
    ['lumo', 'material'].forEach(theme => {
      suite
        .setUrl(`/default.html?theme=${theme}`)
        .setCaptureElements('#default-tests')
        .capture(`vaadin-element-${theme}`);
    });
  });

});
