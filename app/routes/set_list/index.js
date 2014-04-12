var SetListIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('setList');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor("songs").set('model', this.store.find("song"));
  }
});

export default SetListIndexRoute;
