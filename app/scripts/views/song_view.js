Hendrix.SongView = Ember.View.extend({
  classNames: ['song-view'],
  didInsertElement: function() {
    _this = this;

    $('.song-view').on('click', '.action-transpose', function(e) {
      debugger
      e.stopPropagation();
      e.preventDefault();
      _this.$('pre').transpose();
    });
  }
});