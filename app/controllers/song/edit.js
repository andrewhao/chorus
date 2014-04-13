var SongEditController = Ember.ObjectController.extend({
  // Currently this code is duplicated in SongsCreateController.
  needs: ["song"],
  actions: {
    save: function() {
      var model = this.get('model');
      var controller = this.get("controllers.song");
      model.save().then(function(model) {
        // redirects to the song itself
        controller.transitionToRoute('song', model);
      });
    }
  }
});

export default SongEditController;
