Polymer({
    is: 'user-view',
    ready: function() {
      this.employees = [
          {first: 'Bob', last: 'Smith'},
          {first: 'Sally', last: 'Johnson'},
      ];
    },
    order: function(e) {
      var model = e.model;
      model.set('item.last', 'Martinez');
    }
});