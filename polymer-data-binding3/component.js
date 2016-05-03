Polymer({
    is: 'user-view',
    properties: {
        first: String,
        last: String,
        manager: {
            type: Object,
            value: function() {
                return {fn:'Jorge', ln:'Casar'};
            }
        }       
    },
    computeFullName: function(first, last) {
        return first + ' ' + last;
    },
    computeFullNameManager: function(mng) {
        return mng.fn + ' ' + mng.ln;
    },
    listeners: {
        'tap': 'onTap'
    },
    onTap: function() {
        this.first = 'Manuel';
        this.last = 'Martin';
    }
});