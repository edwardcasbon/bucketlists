app.BucketCollection = Backbone.Collection.extend({

    model: app.BucketModel,

    url: function() {
        return app.Api.url + 'buckets?userId=' + app.User.id;
    }

});
