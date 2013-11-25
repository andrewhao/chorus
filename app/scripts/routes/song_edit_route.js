Hendrix.SongEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('song');
  }
});