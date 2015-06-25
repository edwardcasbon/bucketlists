app.BucketView = Backbone.View.extend({

    template: _.template($("script.bucket").html()),

    data: {},

    initialize: function(id) {

        // Render the view.
        this.render();

        // Create a new buckets collection
        this.bucket = new app.BucketModel(id);
        this.listenTo(this.bucket, 'sync add remove change', function(){
            this.data.bucket = this.bucket.toJSON();
            this.render();
        });
        this.bucket.fetch();

        // Create an items collection.
        this.items = new app.ItemCollection({bucketId: id});
        this.listenTo(this.items, 'sync add remove change', function(){
            this.data.items = this.items.toJSON();
            this.render();
        });
        this.items.fetch();
    },

    render: function() {
        this.$el.html(this.template(this.data));
        return this;
    }
});
