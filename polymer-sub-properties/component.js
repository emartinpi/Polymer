Polymer({
      is: 'user-view',
      properties: {
        user: {
          type: Object,
          value: function() {
            return {};
          }
        }, 
        manager: {
          type: Object,
          value: function() {
            return {
              'name': {}
            };
          }
        }
      },
      // Each item of observers array is a method name followed by
      // a comma-separated list of one or more paths.
      observers: [
        'userNameChanged(user.name)',
        'managerNameChanged(manager.name.*)'
      ],
      // Each method referenced in observers must be defined in
      // element prototype. The argument to the method is the new value
      // of the sub-property.
      userNameChanged: function(name) {
        console.log('new name: ' + name);
      },
      managerNameChanged: function(changeRecord) {
        console.log('new manager name: ' + JSON.stringify(changeRecord));
      }
    });