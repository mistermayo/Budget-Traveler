Budget.NewItemController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var item = this.get('model');
      email.save();

      var controller = this;
      item.get('category').then(function(category) {
        category.save();
        controller.transitionToRoute('category', category);
      });
    }
  }
});
