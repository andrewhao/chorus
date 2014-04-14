var SetListsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // just before saving, we set the creationDate
      var model = this.get('model');
      var controller = this;

      model.save().then(function() {
        controller.transitionToRoute('set_list', model);
      });

    }
  }
});

export default SetListsCreateController;
