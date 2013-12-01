Hendrix.SetsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('set');
  }
});
