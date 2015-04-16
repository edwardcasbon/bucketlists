// Handy app object.
var app = {};

// Set the root element that the app will add content to.
app.el = $("#app");

// Set the scope to use for the Bucketlists app.
app.scope = 'bl';

// Set a scope for the underscore template variables. (e.g. bl.title)
_.templateSettings.variable = app.scope;

// Temporary.
app.User = {
    id: 1
};

app.Api = {
    url: 'http://api.bucketlists.dev/'
};
