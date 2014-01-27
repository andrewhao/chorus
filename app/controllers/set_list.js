var SetListController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var setList = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      setList.save();
      // then transition to the current user
      this.transitionToRoute('set_list', setList);
    },
    edit: function() {
      this.transitionToRoute('set_list.edit');
    },

    delete: function() {
      // this tells Ember-Data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      // then transition to the users route
      this.transitionToRoute('set_lists');
    }
  },
});

export default SetListController;
