var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('songs');
  }
});

export default IndexRoute;
