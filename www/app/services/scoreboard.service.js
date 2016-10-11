app.factory('scoreboard', ['$q', '$http', function ($q, $http) {

    var getScore = function () {
        var deferred = $q.defer();

        $http.get('http://localhost:3000/api/posts')
            .success(function (data) {
                deferred.resolve(data);
                console.log('this is app' + data);

            })
            .error(function (err) {
                console.log(err);
                deferred.reject(err);
            });

        return deferred.promise;

    };

    return {
        getScore: getScore
    };

}]);