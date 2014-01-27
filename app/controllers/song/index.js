var SongIndexController = Ember.ObjectController.extend({
  text: function() {
    return this.get('rawText');
  }.property('rawText')
});

export default SongIndexController;
