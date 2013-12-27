Hendrix.SetListsCreateRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },

  renderTemplate: function() {
    this.render('set_list.edit', {
      controller: "setListsCreate"
    });
  }
});
