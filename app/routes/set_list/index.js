var SetListIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('set_list', 1);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor("songs").set('model', this.store.find("song"));
  }
});

export default SetListIndexRoute;
