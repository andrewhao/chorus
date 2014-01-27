import ApplicationAdapter from 'appkit/adapters/application';

debugger;
console.log("importing ApplicationAdapter");

var Store = DS.Store.extend({
  adapter: ApplicationAdapter
});

export default Store;
