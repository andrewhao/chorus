var SongIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('song')
  },

  setupController: function(controller, model) {
    controller.set("model", model);
    controller.set('setLists', this.store.find('setList'));
  }
});

export default SongIndexRoute;
