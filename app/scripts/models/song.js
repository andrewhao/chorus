Hendrix.Song = DS.Model.extend({
  title: DS.attr(),
  key: DS.attr(),
  rawData: DS.attr(),

  // a song can belong to multiple sets
  sets: DS.hasMany('setList', {
    async: true
  }),

  _parser: function() {
    return new Chordmeister.Parser(this.get('rawData'));
  },

  // This displays lyric-only text on the song.
  lyrics: function() {
    var lines = this._parser().lyricText();
    return lines;
  }.property('rawData')
});

Hendrix.Song.FIXTURES = [{
  id: 1,
  title: "The Star Spangled Banner",
  key: "G",
  rawData: "G A C D\nOh say can you see",
  setLists: [1]
}, {
  id: 2,
  title: "Little Wing",
  key: "G",
  rawData: "G A C D\nOohooooOoooooh",
  setLists: [1]
}, {
  id: 3,
  title: "American Idiot",
  key: "G",
  rawData: "G A C D\nDon't wanna be an American idiot!",
  setLists: []
}];
