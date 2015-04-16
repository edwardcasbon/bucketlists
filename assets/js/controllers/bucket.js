app.Bucket = Backbone.View.extend({

    template: _.template($("script.bucket").html()),

    data: {},

    initialize: function(id) {

        // Render the view with any data it has.
        this.render();

        // Create an items collection.
        this.items = new app.Items({
            bucketId: id
        });

        this.listenTo(this.items, 'sync add remove change', function(){
            this.data.items = this.items.toJSON();
            this.render();
        });

        // Initially fetch the items collection from the API.
        this.items.fetch();
    },

    render: function() {
        this.$el.html(this.template(this.data));
        return this;
    }
});
