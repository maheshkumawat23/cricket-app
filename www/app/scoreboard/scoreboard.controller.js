app.controller('ScoreboardController', function ($scope, $state, scoreboard, $window, $ionicPopup) {
    $scope.getdata = [];

    $scope.currentTeam = {
        team1: "Team A",
        team2: "Team B"
    };

    $scope.team1 = {
        run: '00',
        wckt: '00',
        overs: 0
    };

    $scope.team2 = {
        run: '00',
        wckt: '00',
        overs: 0
    };

    $scope.toss = {
        win: 'Team A',
        choice: 'bat'
    }

    $scope.currentplayer = {
        playerA: { name: 'Shobhit Chittora', score: 100 },
        playerB: { name: 'Mahesh Kumawat', score: 51 },

    }

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Alert',
            template: '<center>Swipe down to refresh</center>'
        });

        alertPopup.then(function (res) {
            console.log('okay');
        });
    };

    $scope.refresh = function () {
        console.log('Refreshing...');
        //Pop up
        if ($window.localStorage.getItem('firsttime') == 'true') {
            $window.localStorage.setItem('firsttime', 'false');
            $scope.showAlert();
        }

        var promise = scoreboard.getScore();

        promise.then(function (data) {
            console.log(data);
            $scope.team1.run = data[0].teamARun;
            $scope.team1.wckt = data[0].teamAWicket;
            $scope.team1.overs = data[0].teamAOvers;
            $scope.team2.run = data[0].teamBRun;
            $scope.team2.wckt = data[0].teamBWicket;
            $scope.team2.overs = data[0].teamBOvers;
            $scope.status = data[0].status;
            $scope.currentplayer.playerA.name = data[0].currentPlayer1Name;
            $scope.currentplayer.playerA.score = data[0].currentPlayer1Score;
            $scope.currentplayer.playerB.name = data[0].currentPlayer2Name;
            $scope.currentplayer.playerB.score = data[0].currentPlayer2Score;
            $scope.currentTeam.team1 = data[0].teamAName;
            $scope.currentTeam.team2 = data[0].teamBName;
            $scope.currentplaying = data[0].currentplaying;

            $scope.$emit('myEmit',data);
            
            $scope.$broadcast('scroll.refreshComplete');


        });
    };

    $scope.refresh();
    $scope.$on('myCustomEvent', function (event, data) {
        //console.log(data); // 'Data to send'
        $scope.refresh();
    });


    $scope.location = function () {
        $state.go('mapview');
    }

});