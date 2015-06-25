app.HomeView = Backbone.View.extend({

    template: _.template($("script.home").html()),

    data: {
        title: "Buckets"
    },

    events: {
        'click .create': '_showForm'
    },

    initialize: function() {

        // Render the view with any data it has.
        this.render();

        // Create a buckets collection.
        this.buckets = new app.BucketCollection();

        // Listen to the buckets collection, and when updated, add the
        // buckets to the data object.
        this.listenTo(this.buckets, 'sync add remove change', function(){
            this.data.buckets = this.buckets.toJSON();
            this.render();
        });

        // Initially fetch the buckets collection from the API.
        this.buckets.fetch();
    },

    render: function() {
        this.$el.html(this.template(this.data));
        return this;
    },

    _showForm: function(e) {
        e.preventDefault();
        console.log("Show the form");
    }
});
