Budget.Item = DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  cost: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
