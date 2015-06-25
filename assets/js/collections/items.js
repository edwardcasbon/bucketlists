app.ItemCollection = Backbone.Collection.extend({

    model: app.ItemModel,

    params: {},

    url: function() {
        return app.Api.url + 'items?bucketId=' + this.params.bucketId;
    },

    initialize: function(params) {
        this.params = params;
    }

});
