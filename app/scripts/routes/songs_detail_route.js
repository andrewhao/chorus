Hendrix.SongsDetailRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('songs')
  }
});