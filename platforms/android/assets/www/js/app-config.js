

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
 .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller:'loginController'
  })

  $urlRouterProvider.otherwise('/login');


});





