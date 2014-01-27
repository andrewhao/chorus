var SetListEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('setList');
  }
});

export default SetListEditRoute;
