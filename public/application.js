$(function(){
  //Pinnit Model
  window.Pinnit = Backbone.Model.extend({
  });

  //Pinnit Collection
  window.PinnitCollection = Backbone.Collection.extend({
    model: Pinnit,

    initialize: function() {
    },

    url: function() {
      return '/jsrv/';
    },

    parse: function(response) {
      return response;
    }

  });

  window.Pinnits = new PinnitCollection;

  //Pinnit Application
  window.AppView = Backbone.View.extend({
    el: $('#container'),

    pinTemplate: _.template($('#pintemplate').html()),
    
    initialize: function() {
      Pinnits.bind('all', this.render, this);
      Pinnits.fetch();
    },

    render: function() {
      var that = this;
      _.each(Pinnits.models, function(model) {
        this.$('#columnContainer').append(that.pinTemplate({model: model}));
      });
    }
  });

  window.App = new AppView;
});
