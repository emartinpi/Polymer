Polymer({

      is: 'bind-array-element',

      properties: {
        myArray: {
          type: Array,
          value: [{ name: 'Bob' }, { name: 'Doug' } ]
        }
      },
     
      // first argument is the change record for the array change,
      // change.base is the array specified in the binding
      arrayItem: function(change, index, path) {
        // this.get(path, root) returns a value for a path
        // relative to a root object.
        return this.get(path, change.base[index]);
      },
     
      ready: function() {
        // mutate the array
        //this.unshift('myArray', { name: 'Susan' });
        // change a subproperty
        this.set('myArray.1.name', 'Rupert');
      }
    });