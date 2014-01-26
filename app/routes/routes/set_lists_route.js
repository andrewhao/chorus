var SetListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('setList');
  }
});

export default SetListsRoute;
