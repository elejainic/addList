(function($){
	  var ListView = Backbone.View.extend({
    el: $('div'), // attaches `this.el` to an existing element.

       events: {
      'click button#add': 'addItem',
      'click button#remove': 'removeItem'
    }, 

        initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
       this.counter = 0;
       this.render(); // not all views are self-rendering. This one is.
    },

        render: function(){
       

      $(this.el).append('<button id="add">Add list item</button>');
      $(this.el).append('<ul></ul>');
      $(this.el).append('<button id="remove">Remove item</button>')

      
    },

    addItem: function(){
      var input = $( "#oracion" );
      this.counter++;
      $(this.el).append('<ul><input type="checkbox">' + input.val() + '</ul>')
    },

    removeItem: function(){
      var input = $( "#oracion" );
      this.counter++;
     $('input type="checkbox"').remove();
       
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
