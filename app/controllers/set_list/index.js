var SetListIndexController = Ember.ObjectController.extend({
  songsController: Ember.computed.alias("controllers.songs"),
  needs: ['songs'],
  actions: {
    addSong: function() {
      var songId = this.selectedNewSong;
      var song = this.store.find('song', songId).then(function(song) {
        debugger;
        this.get('model').get('songs').push(song);
      });
    },

    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('set_lists');
    }
  },
  // The new song chosen in the select dropdown.
  selectedNewSong: null
});

export default SetListIndexController;
