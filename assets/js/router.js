app.config(["$routeProvider", function ($routeProvider) {

    // Home
    $routeProvider.when('/home', {
        templateUrl: '/assets/js/templates/home.html',
        controller: 'home'
    });

    // Log in
    $routeProvider.when('/login', {
        templateUrl: '/assets/js/templates/login.html',
        controller: 'login'
    });

    // Bucket
    $routeProvider.when('/bucket/:id', {
        templateUrl: '/assets/js/templates/bucket.html',
        controller: 'bucket'
    });

    // Item
    $routeProvider.when('/item/:id', {
        templateUrl: '/assets/js/templates/item.html',
        controller: 'item'
    });

    // Default
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
