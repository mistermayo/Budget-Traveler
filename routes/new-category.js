Budget.NewCategoryRoute = Ember.Route.extend({
  model: function(params) {
    var country = this.modelFor('country');
    var category = this.store.createRecord('category');
    country.get('categories').then(function(categories) {
      categories.pushObject(category);
    });
    return category;
  }
});
