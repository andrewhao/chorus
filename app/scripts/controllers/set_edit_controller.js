Hendrix.SetEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var set = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      set.save();
      // then transition to the current user
      this.transitionToRoute('set', set);
    }
  }
});