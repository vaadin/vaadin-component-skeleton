import '../../vaadin-element.html';

describe('sample test', function() {
  var element;

  beforeEach(() => {
    element = document.createElement('vaadin-element');
    document.body.appendChild(element);
  });

  afterEach(() => {
    element.parentNode && element.parentNode.removeChild(element);
  });

  it('should pass', () => {
    expect(element.localName).to.be.equal('vaadin-element');
  });

  it('should not expose class name globally', () => {
    expect(window.VaadinElement).not.to.be.ok;
  });

  it('should have a valid version number', () => {
    expect(element.constructor.version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
  });
});
