var Song = DS.Model.extend({
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

export default Song;
