Hendrix.SetEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('set');
  }
});