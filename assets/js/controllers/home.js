app.controller('home', ['$scope', '$routeParams', 'api', function($scope, $routeParams, api) {

    init = function() {

        // Title.
        $scope.title = "Buckets";

        // Get the buckets
        getBuckets(function(data) {
            $scope.buckets = data;
        });
    };

    var getBuckets = function(callback) {

        // Get the buckets and add them to the scope.
        api.buckets.get({
            userId: user.id

        }).success(function(data){
            if(typeof callback === 'function') {
                callback.call(this, data);
            }

        }).error(function(error){
            console.log(error);

        });
    };

    $scope.forms = {};
    $scope.forms.create = {};
    $scope.forms.create.submit = function(e) {

        // 'this' is $scope.form.add.

        // Add a new bucket
        api.buckets.create({
            userId: user.id,
            label: this.label

        }).success(function(bucket) {
            $scope.buckets.push(bucket);

        }).error(function(error) {
            console.log(error);
        });
    };


    init();
}]);
