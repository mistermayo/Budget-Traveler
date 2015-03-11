Budget.NewCategoryController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var category = this.get('model');
      category.save();
      // controller.transitionToRoute('categories', categorie);

      var controller = this;
      category.get('country').then(function(country) {
        country.save();
        controller.transitionToRoute('country', country);
      });
    }
  }
});
