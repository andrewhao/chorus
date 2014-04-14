var SetListsCreateRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('setList');
  },

  renderTemplate: function() {
    this.render('set_list.edit', {
      controller: "set_lists.create"
    });
  }
});

export default SetListsCreateRoute;
