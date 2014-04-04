var SetListIndexController = Ember.ObjectController.extend({
  songsController: Ember.computed.alias("controllers.songs"),
  needs: ['songs'],
  actions: {
    addSong: function() {
      var songId = this.selectedNewSong;
      
      debugger;
    }
  },
  // The new song chosen in the select dropdown.
  selectedNewSong: null
});

export default SetListIndexController;
