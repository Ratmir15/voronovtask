var addClientWizard = addClientWizard || {};

addClientWizard.addressInfoView = Backbone.View.extend({
  template: _.template( $('#add-address-info').html() ),

  events: {
    "click #complete": "_completeClicked"
  },

  render: function () {
    this.$el.html( this.template() );
    return this;
  },
  
  _completeClicked: function(e){
    e.preventDefault();

    var formData = {};

    this.$('.wizard-form input').each( function( i, el ) {
      if( $( el ).val() != '' ) {
        formData[ el.name ] = $( el ).val();
      }

      $( el ).val('');
    });

    this.model.set(formData);

    this.trigger("done", this.model)

  }

});
