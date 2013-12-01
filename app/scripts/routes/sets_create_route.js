Hendrix.SetsCreateRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },

  renderTemplate: function() {
    this.render('set.edit', {
      controller: "setsCreate"
    });
  }
});