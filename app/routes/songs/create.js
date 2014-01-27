var SongsCreateRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('song');
  },

  renderTemplate: function() {
    this.render('song.edit', {
      controller: "songs.create"
    });
  }
});

export default SongsCreateRoute;
