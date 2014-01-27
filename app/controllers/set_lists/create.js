var SetListsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newSetList = this.store.createRecord('setList', this.get('model'));
      newSetList.save();

      // redirects to the song itself
      this.transitionToRoute('set_list', newSetList);
    }
  }
});

export default SetListsCreateController;
