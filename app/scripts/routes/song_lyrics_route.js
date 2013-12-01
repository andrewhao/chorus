Hendrix.SongLyricsRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('song');
  }
});