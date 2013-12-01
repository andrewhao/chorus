Hendrix.Store = DS.Store.extend();
// Hendrix.ApplicationAdapter = DS.FixtureAdapter;
Hendrix.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'hendrix'
});