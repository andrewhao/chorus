var SongsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  },

  actions: {
    edit: function() {
      var model = this.modelFor('song');
      this.controllerFor('song').transitionToRoute('song.edit', model);
    },

    save: function() {
      var model = this.currentModel;
      var controller = this.controllerFor('song');
      model.save().then(function() {
        // redirects to the song itself
        controller.transitionToRoute('song', model);
      });
    },

    delete: function() {
      // this tells Ember-Data to delete the current user
      var model = this.currentModel;
      var controller = this.controllerFor('song');
      model.deleteRecord();
      model.save().then(function() {
        controller.transitionToRoute('songs');
      })
    }
  }

});

export default SongsRoute;
