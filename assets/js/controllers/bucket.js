app.controller('bucket', ['$scope', '$routeParams', 'api', '$q', function($scope, $routeParams, api, $q) {

    var bucket;

    var init = function() {

        // Set the title.
        $scope.title = "Bucket";

        // Get the bucket.
        getBucket().then(getItems);

    };

    var getBucket = function() {
        return $q(function(resolve, reject) {
            api.buckets.get(
                $routeParams

            ).success(function(data) {
                bucket = data;
                $scope.title = bucket.label;

                // Resolve the promise.
                resolve();

            }).error(function(error) {
                console.log(error);

                // Reject the promise.
                reject();

            });
        });
    };

    var getItems = function() {
        api.items.get({
            bucketId: bucket.id

        }).success(function(data) {
            $scope.items = data;

        }).error(function(error) {
            console.log(error);
        });
    };

    init();

}]);
