Hendrix.SongView = Ember.View.extend({
  classNames: ['song-view'],
  didInsertElement: function() {
    var _this = this;

    jQuery('.song-view').on('click', '.action-transpose', function(e) {
      e.stopPropagation();
      e.preventDefault();
      _this.$('pre').transpose();
    });
  }
});
