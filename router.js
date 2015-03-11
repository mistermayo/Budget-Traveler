Budget.Router.map(function() {
  this.resource('categories', {path: '/'});
  this.resource('category', {path: ':category_id'},
    function() {
      this.resource('new-item');
      this.resource('item', {path: ':category_id'});

    });
  this.resource('new-category');
  this.resource('about');
});
