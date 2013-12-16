Hendrix.SongIndexController = Ember.ObjectController.extend({
  text: function() {
    var data = this.get('rawData');
    return data;
  }.property("model.rawData"),
});