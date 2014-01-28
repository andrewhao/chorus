import SetList from 'appkit/routes/set_list';

var route;
module("Unit - SetListRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:set_list'
    ]);

    route = container.lookup('route:set_list');
  }
});

test("it is instance of SetList", function(){
  ok(route);
  ok(route instanceof SetList);
});
