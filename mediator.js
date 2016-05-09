var addClientWizard = addClientWizard || {};

addClientWizard.mediator = {

  init: function(){
    var self = this;

    this._getClientInfoAsync()
      .then(this._specifyAddressForClientAsync)
      .then(this._saveClient);
  },

  _getClientInfoAsync: function(){
    return new Promise(function(resolve, reject) {

      var clientInfoView = new addClientWizard.clientInfoView({model: new addClientWizard.ClientModel()});

      $("#wizard").html(clientInfoView.render().el);

      clientInfoView.on('done', resolve);
    });
  },

  _specifyAddressForClientAsync: function(client){
    return new Promise(function(resolve, reject) {

      var addressInfoView = new addClientWizard.addressInfoView({
        model: client
      });

      $("#wizard").html(addressInfoView.render().el);

      addressInfoView.on('done', resolve);

    });

  },

  _saveClient: function(client) {
    console.log(client);
    $("#wizard").html('<div class="notification notification-success">Success!</div>')
  }
};