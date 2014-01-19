Hendrix.SetList = DS.Model.extend({
  title: DS.attr(),
  songs: DS.hasMany('song', {async: true})
});

Hendrix.SetList.FIXTURES = [{
  id: 1,
  title: "Test Set List",
  songs: [1, 2]
}];
