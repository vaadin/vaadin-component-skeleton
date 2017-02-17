gemini.suite('vaadin-element', function(rootSuite) {

  rootSuite.setUrl('/');

  gemini.suite('vaadin-element', function(suite) {
    suite
      .setCaptureElements('#visual-tests')
      .before(function(actions, find) {
        this.button = find('button');
      })
      .capture('normal-button', {}, function(actions, find) {
        actions.wait(3000); // hack for IE/Edge
      })
      .capture('clicked-button', function(actions) {
        actions.mouseDown(this.button);
      });
  });

});
