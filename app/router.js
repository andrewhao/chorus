var Router = Ember.Router.extend();

Router.map(function() {
  this.resource("songs", function() {
    this.resource("song", {path: '/:song_id'}, function() {
      this.route('edit');
      this.route('lyrics');
    });
    this.route('create');
  });

  this.resource("set_lists", function() {
    this.resource("set_list", {path: '/:set_list_id'}, function() {
      this.route('edit');
    });
    this.route('create');
  });
});

export default Router;
