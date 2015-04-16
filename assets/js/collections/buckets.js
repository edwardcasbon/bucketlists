app.Buckets = Backbone.Collection.extend({

    model: app.Bucket,

    url: function() {
        return app.Api.url + 'buckets?userId=' + app.User.id;
    }

});
