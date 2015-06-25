app.BucketModel = Backbone.Model.extend({

    label: "Bucket model default label",

    url: function() {
        return app.Api.url + 'buckets?id=' + this.id;
    },

    initialize: function(id) {
        this.id = id;
    }

});
