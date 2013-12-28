Hendrix.SongIndexController = Ember.ObjectController.extend({
  text: function() {
    var data = this.get('rawText');
    return data;
  }.property("model.rawText"),
});
