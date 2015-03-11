Budget.Category = DS.Model.extend({
  name: DS.attr(),
  items: DS.hasMany('item', {async: true}),
  country: DS.belongsTo('country', {async: true})
});
