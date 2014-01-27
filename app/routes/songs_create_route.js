var SongsCreateRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },

  renderTemplate: function() {
    this.render('song.edit', {
      controller: "songsCreate"
    });
  }
});

export default SongsCreateRoute;
