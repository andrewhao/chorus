var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index redirects to #/songs', function(){
  visit('/').then(function(){
    ok(exists(":contains('Add song')"));
  });
});
