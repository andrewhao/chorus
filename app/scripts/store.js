$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  }
});
Hendrix.Store = DS.Store.extend();
Hendrix.ApplicationAdapter = DS.RESTAdapter.extend({
  host: "http://localhost:3000",
  // Force ember-data to append the `json` suffix
  buildURL: function(record, suffix) {
    return this._super(record, suffix) + ".json";
  }
})
//Hendrix.ApplicationAdapter = DS.FixtureAdapter;
// Hendrix.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'hendrix'
// });
