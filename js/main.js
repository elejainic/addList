(function($){

  var ListView = Backbone.View.extend({
  el: $('body'), // attaches `this.el` to an existing element.
  events: {
    'click button#add': 'addItem',
    'click button#remove': 'removeItem'
  }, 


  initialize: function(){
  _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
  this.render(); // not all views are self-rendering. This one is.
  },


  addItem: function(){
      var input = $( "#oracion" );
      $(this.el).append('<ul align="center"><input  type="checkbox">' + input.val() + '</ul></span>');
  },

  
  removeItem: function(){
      var input = $( "#oracion" );
      $('input:checkbox:checked').parent('ul').remove();
       
  }
  });

	   
     var listView = new ListView();
})(jQuery);







/*
var Person = Backbone.Model.extend({

});


var Person = function(config){
	this.name = config.name;
	this.age = config.age;
};
*/
