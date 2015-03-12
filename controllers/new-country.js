Budget.NewCountryController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newCountry = this.store.createRecord('country', {
        name: this.get('name'),
        image: this.get('image')

      });

      newCountry.save();
      this.transitionToRoute('countries');
      this.set("name", null);
      this.set("country", null);
      this.set('image', null);

    }

  }
});
