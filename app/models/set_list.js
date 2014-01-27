var SetList = DS.Model.extend({
  title: DS.attr(),
  songs: DS.hasMany('song', {async: true})
});

export default SetList;
