var SetListIndexController = Ember.ObjectController.extend({
  songsController: Ember.computed.alias("controllers.songs"),
  needs: ['songs'],
  actions: {
    addSong: function() {
      var songId = this.selectedNewSong;
      var controller = this;
      var setList = this.get('model');
      var song = this.store.find('song', songId).then(function(song) {
        setList.get('songs').then(function(songs) {
          songs.pushObject(song);
          setList.save();
        });
      });
    },

    delete: function() {
      var model = this.get('model');
      var controller = this;
      model.destroyRecord().then(function() {
        // FIXME This doesn't seem to work. Should this
        // be wrapped in a 'finally'?
        controller.transitionToRoute('set_lists');        
      });
    }
  },
  // The new song chosen in the select dropdown.
  selectedNewSong: null
});

export default SetListIndexController;
