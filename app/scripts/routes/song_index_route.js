Hendrix.SongIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('song');
  }
});