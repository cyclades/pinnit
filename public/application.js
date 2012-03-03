$(function(){
  window.Pinnit = Backbone.Model.extend({
  });

  window.PinnitCollection = Backbone.Collection.extend({
    model: window.Pinnit,

    initialize: function() {
    },

    url: function() {
      return '/jsrv/';
    },

    parse: function(response) {
      return response.data.children;
    }

  });

  window.Pinnits = new PinnitCollection;

  window.AppView = Backbone.View.Extend({
    el: $('#container')
  });

  window.App = new AppView;
});
