var addClientWizard = addClientWizard || {};

addClientWizard.clientInfoView = Backbone.View.extend({
  template: _.template( $('#add-client-info').html() ),

  events: {
    "click #nextpage": "_nextClicked"
  },

  render: function () {
    this.$el.html( this.template() );
    return this;
  },

  _nextClicked: function(e){
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
