$(function(){
  window.Pinnit = Backbone.Model.extend({
  });

  window.PinnitCollection = Backbone.Collection.extend({
    initialize: function() {
      this.fetch();
    },

    url: function() {
      return "/r/EarthPorn/.json";
    }
  });

  window.Pinnits = new PinnitCollection;
});
