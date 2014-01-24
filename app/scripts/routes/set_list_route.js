Hendrix.SetListRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('set_list', params.set_list_id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.controllerFor("songs").set('model', this.store.find("song"));
  }
});
