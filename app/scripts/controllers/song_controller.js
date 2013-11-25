Hendrix.SongController = Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.transitionToRoute('song.edit');
    }
  }
});