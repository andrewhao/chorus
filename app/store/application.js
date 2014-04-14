import ApplicationAdapter from 'appkit/adapters/application';

var Store = DS.Store.extend({
  adapter: ApplicationAdapter
});

export default Store;
