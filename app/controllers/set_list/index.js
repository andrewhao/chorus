var SetListIndexController = Ember.ObjectController.extend({
  songsController: Ember.computed.alias("controllers.songs"),
  needs: ['songs']
});

export default SetListIndexController;
