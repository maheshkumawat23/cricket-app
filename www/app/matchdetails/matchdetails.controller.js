app.controller('MatchdetailsController', function ($scope) {

    $scope.number = 11;
    $scope.getNumber = function (num) {
        return new Array(num);
    }
    
    $scope.teama = [
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Rahul'
    ];

    
    $scope.teamb = [
        'Rohit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Shobhit',
        'Mahesh',
        'Rahul'
    ];

    $scope.getteama = function(idx){
        return $scope.teama[idx];
    }
    
    $scope.getteamb = function(idx){
        return $scope.teamb[idx];
    }
});