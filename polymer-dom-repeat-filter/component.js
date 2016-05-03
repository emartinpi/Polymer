Polymer({
      is: "user-view",
      computeFilter: function(string) {
        if (!string) {
          // set filter to null to disable filtering
          return null;
        } else {
          // return a filter function for the current search string
          string = string.toLowerCase();
          return function(employee) {
            var first = employee.firstname.toLowerCase();
            var last = employee.lastname.toLowerCase();
            return (first.indexOf(string) != -1 ||
                last.indexOf(string) != -1);
          };
        }
      },
      properties: {
        employees: {
          type: Array,
          value: function() {
            return [
              { firstname: "Jack", lastname: "Aubrey" },
              { firstname: "Anne", lastname: "Elliot" },
              { firstname: "Stepehen", lastname: "Maturin" },
              { firstname: "Emma", lastname: "Woodhouse" }
            ]
          }
        }
      }
    });