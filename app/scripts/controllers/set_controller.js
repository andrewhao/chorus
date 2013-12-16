Hendrix.SetController = Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.transitionToRoute('set.edit');
    },
    delete: function() {
      // this tells Ember-Data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      // then transition to the users route
      this.transitionToRoute('sets');
    }
  }
});