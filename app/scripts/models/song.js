Hendrix.Song = DS.Model.extend({
  title: DS.attr(),
  key: DS.attr(),
  rawText: DS.attr(),

  // a song can belong to multiple sets
  setLists: DS.hasMany('setList', {
    async: true
  }),

  _parser: function() {
    return new Chordmeister.Parser(this.get('rawText'));
  },

  // This displays lyric-only text on the song.
  lyrics: function() {
    var lines = this._parser().lyricText();
    return lines;
  }.property('rawText')
});

Hendrix.Song.FIXTURES = [{
  id: 1,
  title: "The Star Spangled Banner",
  key: "G",
  rawText: "G A C D\nOh say can you see",
  setLists: [1]
}, {
  id: 2,
  title: "Little Wing",
  key: "G",
  rawText: "G A C D\nOohooooOoooooh",
  setLists: [1]
}, {
  id: 3,
  title: "American Idiot",
  key: "G",
  rawText: "G A C D\nDon't wanna be an American idiot!",
  setLists: []
}];
