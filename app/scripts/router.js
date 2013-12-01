Hendrix.Router.map(function() {
  this.resource("songs", function() {
    this.resource("song", {path: '/:song_id'}, function() {
      this.route('edit');
      this.route('lyrics');
    });
    this.route('detail');
    this.route('create');
  });
  this.resource("sets", function() {
    this.resource("set", {path: '/:set_id'}, function() {
      this.route('edit');
    });
    this.route('create');
  });
});
