var SetListEditRoute = Ember.Route.extend({
  model: function() {
    var sl = this.modelFor('setList');
    return sl
  }
});

export default SetListEditRoute;
