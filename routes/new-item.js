Budget.NewItemRoute = Ember.Route.extend({
  model: function(params) {
    var category = this.modelFor('category');
    var item = this.store.createRecord('item');
    category.get('items').then(function(items) {
      items.pushObject(item);
    });
    return item;
  }
});
