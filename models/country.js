Budget.Country = DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  categories: DS.hasMany('category', {async: true})
});
