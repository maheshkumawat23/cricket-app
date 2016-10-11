

app.run(['$rootScope', '$ionicPlatform', '$state', '$window', function ($rootScope, $ionicPlatform, $state, $window) {
  // bootstrap3 theme. Can be also 'bs2', 'default'
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });


  //First time set local storage
  if ($window.localStorage.getItem('firsttime') === null) {
    $window.localStorage.setItem('firsttime', 'true');
  }

}]);

//app run over
//app config start                  
app.config(function ($stateProvider, $urlRouterProvider) {



  $stateProvider

    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "app/dash/dash.html",
      controller: 'DashBoardController'
    })

    .state('tabs.livescore', {
      url: "/livescore",
      views: {
        'livescore-tab': {
          templateUrl: "app/scoreboard/scoreboard.html",
          controller: 'ScoreboardController'
        }
      }
    })

    .state('tabs.schedule', {
      url: "/schedule",
      views: {
        'schedule-tab': {
          templateUrl: "app/schedule/schedule.html",
          controller: 'ScheduleController'
        }
      }
    })

    // .state('tabs.schedule.matchdetails', {
    //   url: "/details/:teama/:teamb",
    //   views: {
    //     'schedule-tab@tabs': {
    //       templateUrl: "app/matchdetails/matchdetails.html",
    //       controller: 'MatchdetailsController'
    //     }
    //   }
    // })

    .state('tabs.teamdetails', {
      url: "/teamdetails",
      views: {
        'teamdetails-tab': {
          templateUrl: "app/teamdetails/teamdetails.html",
          controller: 'TeamdetailsController'
        }
      }
    })

    // .state('tabs.teamdetails.matchdetails', {
    //   url: "/details/:team",
    //   views: {
    //     'teamdetails-tab@tabs': {
    //       templateUrl: "app/matchdetails/matchdetails.html",
    //       controller: 'MatchdetailsController'
    //     }
    //   }
    // })
    .state('tabs.chatbox', {
      url: "/chatbox",
      views: {
        'chatbox-tab': {
          templateUrl: "app/chatbox/chatbox.html",
          controller: 'ChatboxController'
        }
      }
    })

    .state('mapview', {
      url: "/mapview",
      cache: false,
      templateUrl: "app/maps/maps.html",
      controller: 'MapsController'
    })

    ;


  $urlRouterProvider.otherwise('/tab/livescore');


});





