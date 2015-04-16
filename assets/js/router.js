var Router = Backbone.Router.extend({
    routes: {
        '':             'home',
        'home':         'home',
        'bucket/:id':   'bucket',
        'item/:id':     'item'
    },

    home: function () {
        var home = new app.Home();
        app.el.html(home.el);
    },

    bucket: function (id) {
        var bucket = new app.Bucket(id);
        app.el.html(bucket.el);
    },

    item: function (id) {
        var item = new app.Item(id);
        app.el.html(item.el);
    }
});

var router = new Router();
Backbone.history.start();
