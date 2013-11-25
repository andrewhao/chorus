Hendrix.SongEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var song = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      song.save();
      // then transition to the current user
      this.transitionToRoute('song', song);
    }
  }
});