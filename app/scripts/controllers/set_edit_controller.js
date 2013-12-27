Hendrix.SetListEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var setList = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      setList.save();
      // then transition to the current user
      this.transitionToRoute('setList', setList);
    }
  }
});
