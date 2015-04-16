app.Items = Backbone.Collection.extend({

    model: app.Item,

    params: {},

    url: function() {
        return app.Api.url + 'items?bucketId=' + this.params.bucketId;
    },

    initialize: function(params) {
        this.params = params;
    }

});
