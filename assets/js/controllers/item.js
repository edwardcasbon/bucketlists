app.controller('item', ['$scope', '$routeParams', 'api', '$q', function($scope, $routeParams, api, $q) {

    var bucket;
    var item;

    var init = function() {

        // Set the title.
        $scope.title = "Item";

        // Get the item, then it's bucket.
        getItem().then(getBucket);

    };

    var getItem = function() {
        return $q(function(resolve, reject) {
            api.items.get(
                $routeParams

            ).success(function(data) {
                item = data[0];
                $scope.title = item.label;

                // Resolve the promise.
                resolve();

            }).error(function(error) {
                console.log(error);

                // Reject the promise.
                reject();
            });
        });
    };

    var getBucket = function() {
        api.buckets.get({
            id: item.bucket_id

        }).success(function(data) {
            bucket = data[0];

        }).error(function(error) {
            console.log(error);

        });
    };

    // Init!
    init();

}]);
