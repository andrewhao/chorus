var SongEditController = Ember.ObjectController.extend({
  // Currently this code is duplicated in SongsCreateController.
  actions: {
    save: function() {
      var model = this.get('model');
      var controller = this;
      model.save().then(function() {
        // redirects to the song itself
        controller.transitionToRoute('song', model);
      });
    }
  }
});

export default SongEditController;
