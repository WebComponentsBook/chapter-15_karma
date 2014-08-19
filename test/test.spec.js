
describe('<x-dialog>', function() {
  var element;

  before(function(done){
    helpers.importHref('./base/components/src/x-dialog.html', function(){
      Polymer.whenPolymerReady(done);
    });
  });

  beforeEach(function(done){
    element = helpers.injectElement('<x-dialog title="Hello World">Content</x-dialog>', done);
  });

  it('should instantiate via a constructor', function(){
    var dialog = new XDialog();
    expect(dialog).to.be.an.instanceof(HTMLElement)
  });

  it('should have a title', function(){
    expect(element).to.be.an.instanceof(HTMLElement)
    assert.equal(element.title, 'Hello World');
  });

  it('should open', function(){
    element.show();
  });

  afterEach(function(){
    element.remove();
  })

});
