var addClientWizard = addClientWizard || {};

addClientWizard.ClientModel = Backbone.Model.extend({
  defaults: {
    firstname: null,
    lastname: null,
    address1: null,
    address2: null,
    city: null,
    state: null,
    zipcode: null
  }

});