Budget.item = DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  cost: DS.attr(),
  body: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
