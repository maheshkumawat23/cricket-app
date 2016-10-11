app.controller('ChatboxController', function ($scope) {
    $scope.data = {
        username: '',
        comment: ''
    };


    $scope.send = function () {

        if (typeof $scope.data.comment !== 'undefined' && typeof $scope.data.username !== 'undefined') {
            
            $scope.sendMessage($scope.data);
            delete $scope.data.comment;
        }
    };


});