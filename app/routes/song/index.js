var SongIndexRoute = Ember.Route.extend({
  model: function(params) {
    console.log("params!")
    console.log(params)
    return this.store.find('song', 1);
  },

  setupController: function(controller, model) {
    controller.set("model", model);
    controller.set('setLists', this.store.find('setList'));
  }
});

export default SongIndexRoute;
