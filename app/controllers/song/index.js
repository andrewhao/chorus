var SongIndexController = Ember.ObjectController.extend({
  needs: ['song'],
  actions: {
    edit: function() {
      this.get("controllers.song").transitionToRoute('song.edit', this);
    },
    delete: function() {
      // this tells Ember-Data to delete the current user
      var model = this.get("model");
      var controller = this.get("controllers.song");
      model.deleteRecord();
      model.save().then(function() {
        controller.transitionToRoute('songs');
      });
    }
  },

  text: function() {
    return this.get('rawText');
  }.property('rawText')
});

export default SongIndexController;
