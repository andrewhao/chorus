var SongIndexRoute = Ember.Route.extend({
  model: function(params) {
    var song = this.modelFor('song');
    console.log(song);
    return song;
 }
});

export default SongIndexRoute;
