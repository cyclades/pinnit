$(function(){
  window.Pinnit = Backbone.Model.extend({
  });

  window.PinnitCollection = Backbone.Collection.extend({
    initialize: function() {
      this.fetch();
    },

    url: function() {
      return '/jsrv/';
    }
  });

  window.Pinnits = new PinnitCollection;
});
