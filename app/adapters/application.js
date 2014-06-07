var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  // host: "http://localhost:3000",
  host: "http://chorus-api.herokuapp.com",
  // Force ember-data to append the `json` suffix
  buildURL: function(record, suffix) {
    return this._super(record, suffix) + ".json";
  },
  ajax: function(url, method, hash) {
    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});

export default ApplicationAdapter;
