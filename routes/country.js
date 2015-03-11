Budget.CountryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('country', params.budget_id);
  }
});
