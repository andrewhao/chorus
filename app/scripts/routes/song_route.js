Hendrix.SongRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('song', params.song_id);
  },
  setupController: function(controller, model) {
    controller.set("content", model);
    controller.set('sets', this.store.find('set'));
  }
});