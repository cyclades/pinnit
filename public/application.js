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

      var width = 192;
      var columns = [];
      var columnNum = 4;
      for(var i = 0; i < columnNum; i += 1) {
        columns[i] = 0;
      };
      _.each(Pinnits.models, function(model) {
        this.$('#columnContainer').append(that.pinTemplate({model: model}));
        var pin = this.$('#columnContainer').children().last();
        
        var column = 0;
        for(var i = 0; i < columnNum; i+= 1) {
          if(columns[i] < columns[column]) {
            column = i;
          };
        };
        var left = column * width;
        var top  = columns[column] + $(pin).height();
        $(pin).css({'top': top, 'left': left});
        columns[column] += $(pin).height();
      });
    }
  });

  window.App = new AppView;
});
