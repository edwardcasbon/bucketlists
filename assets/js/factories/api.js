app.factory('api', ['$http', function($http) {

    var api = {};

    // API url.
    api.url = 'http://api.bucketlists.dev/';

    // Utility function for formatting the URL with querystring params.
    api.formatUrl = function (url, params) {
        var formatted = api.url + url + '/';
        var paramsArr = [];

        // Convert object to array.
        for(var param in params) {
            paramsArr.push(param + '=' + params[param]);
        }

        // If params then add the query string.
        if(paramsArr.length > 0) {
            formatted += '?' + paramsArr.join("&");
        }

        // Return the formatted URL string.
        return formatted;
    };

    /**
     * BUCKETS
     * -------------------------------------------------------------------------
     */
    api.buckets = {};

    api.buckets.get = function (params) {
        var url = api.formatUrl('buckets', params);
        return $http.get(url);
    };

    api.buckets.create = function (params) {
        var url = api.formatUrl('buckets/create', params);
        return $http.post(url);
    };


    /**
     * ITEMS
     * -------------------------------------------------------------------------
     */
    api.items = {};

    api.items.get = function (params) {
        var url = api.formatUrl('items', params);
        return $http.get(url);
    };


    // Return the api factory.
    return api;

}]);
