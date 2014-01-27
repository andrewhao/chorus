var SongsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});

export default SongsIndexRoute;
