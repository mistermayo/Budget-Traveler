Budget.Router.map(function() {
  this.resource('countries', {path: '/'});
  this.resource('country', {path: ':country_id'}, function() {
    this.resource('new-country');
    this.resource('new-item');
    this.resource('item');
  });
    this.resource('categories');
    this.resource('category', {path: ':category_id'});
    this.resource('new-category');
    this.resource('item', {path: ':item_id'});
    this.resource('about');
});
