Hendrix.SetsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newSet = this.store.createRecord('set', this.get('model'));
      newSet.save();

      // redirects to the song itself
      this.transitionToRoute('set', newSet);
    }
  }
});