var SongEditRoute = Ember.Route.extend({
  model: function() {
    var song = this.modelFor('song');
    return song;
  }
});

export default SongEditRoute;
