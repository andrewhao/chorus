Hendrix.SongsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newSong = this.store.createRecord('song', this.get('model'));

      // TODO/ahao should this transition ony after the save transition completes?
      newSong.save();

      // redirects to the song itself
      this.transitionToRoute('song', newSong);
    }
  }
});
