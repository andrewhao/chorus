Hendrix.Song = DS.Model.extend({
  title: DS.attr(),
  rawData: DS.attr()
});

Hendrix.Song.FIXTURES = [{
  id: 1,
  title: "The Star Spangled Banner",
  rawData: "G A C D\nOh say can you see"
}, {
  id: 2,
  title: "Little Wing",
  rawData: "G A C D\nOohooooOoooooh"
}];