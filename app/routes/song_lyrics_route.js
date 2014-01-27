var SongLyricsRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('song');
  }
});

export default SongLyricsRoute;
