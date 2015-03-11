Budget.Router.map(function() {
  this.resource('categories', {path: '/'});
  this.resource('category', {path: ':category_id'},
    function() {
      this.resource('new-item');
      this.resource('item');
    });
  this.resource('new-category');
  this.resource('item', {path: ':item_id'});
});
