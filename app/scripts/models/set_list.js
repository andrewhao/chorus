Hendrix.SetList = DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  songs: DS.hasMany('song', {async: true})
});

Hendrix.SetList.FIXTURES = [{
  id: 1,
  title: "Test Set List",
  date: "2013-12-01",
  songs: [1, 2]
}];
