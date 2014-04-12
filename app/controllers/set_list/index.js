var SetListIndexController = Ember.ObjectController.extend({
  songsController: Ember.computed.alias("controllers.songs"),
  needs: ['songs'],
  actions: {
    addSong: function() {
      var songId = this.selectedNewSong;
      var controller = this;
      var setList = controller.get('model');
      var song = this.store.find('song', songId).then(function(song) {
        setList.get('songs').then(function(songs) {
          songs.pushObject(song);
          setList.save();
        });
      });
    },

    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save().then(function() {
        this.transitionToRoute('set_lists');
      });
    }
  },
  // The new song chosen in the select dropdown.
  selectedNewSong: null
});

export default SetListIndexController;
