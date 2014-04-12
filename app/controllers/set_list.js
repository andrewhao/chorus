var SetListController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var setList = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      setList.save().then(function(setList) {
        this.transitionToRoute('set_list', setList);
      });
    },
    edit: function() {
      this.transitionToRoute('set_list.edit');
    }

  }
});

export default SetListController;
