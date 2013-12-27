Hendrix.SetListsCreateRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },

  renderTemplate: function() {
    this.render('setList.edit', {
      controller: "setListsCreate"
    });
  }
});
