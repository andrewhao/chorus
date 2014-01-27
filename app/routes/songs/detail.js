var SongsDetailRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('songs');
  }
});

export default SongsDetailRoute;
