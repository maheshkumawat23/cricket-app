app.controller('ScheduleController', function ($http,$scope) {

	$http.get("app/schedule/scheduledata.json").then(function (response) {
    $scope.dash_details = response.data;
    //console.log(response.data);
  });
   
});