Budget.NewCountryController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newCountry = this.store.createRecord('country', {
        name: this.get('name')
      });

      newCountry.save();
      this.transitionToRoute('countries');
      this.set("name", null);
      this.set("country", null);
    }

  }
});
