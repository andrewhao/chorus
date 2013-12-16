Hendrix.SongIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('song');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
  }
});