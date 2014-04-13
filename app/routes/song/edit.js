var SongEditRoute = Ember.Route.extend({
  model: function() {
    // FIXME For some reason, this isn't actually fully loading the song in the route...
    var song = this.modelFor('song');
    return song;
  }
});

export default SongEditRoute;
