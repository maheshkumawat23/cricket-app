cricketApp.controller('homeCtrl', function($scope,$http){
	$scope.live={};
	$scope.team={};
	$scope.live.teamAName="Team1";
	$scope.live.teamBName="Team2";
	
   
	$scope.startLive=function()
	{
		console.log($scope.team.teamA)
		console.log($scope.team.teamB)
		if($scope.team.teamA!=undefined&&$scope.team.teamB!=undefined){
		$scope.live.teamAName=$scope.team.teamA;
		$scope.live.teamBName=$scope.team.teamB;
		$scope.live.teamARun="0";;
            $scope.live.teamAWicket="0";
            $scope.live.teamAOvers="0.0"
			 $scope.live.teamBRun="0";
            $scope.live.teamBWicket="0";
            $scope.live.teamBOvers="0.0";
			$scope.live.currentPlayer1="mahesh";
			$scope.live.currentPlayer1Score="0";
			$scope.live.currentPlayer2="kumawat";
			$scope.live.currentPlayer2Score="0";
			$scope.live.status="have won the toss and elected to first";
			 
		 
			console.log($scope.live);
			$http.post('api/posts',{
				data : $scope.live
				
			}).success(function(data){
				console.log(data);
			})
		}
	}
	$scope.update=function()
	{
		 $http.post('/api/posts', {
      
      data: $scope.live
    }).success(function (post) {
	   console.log('updata success');
	  console.log(post);
    })
	}
	  $http.get('http://localhost:3000/api/posts')
	.success(function (data) {
		//alert('inside success');
		console.log(data);
		$scope.live.teamAName = data[0].teamAName;
		$scope.live.teamBName = data[0].teamBName;
		$scope.live.teamARun=data[0].teamARun;;
            $scope.live.teamAWicket=data[0].teamAWicket;
            $scope.live.teamAOvers=data[0].teamAOvers;
			 $scope.live.teamBRun=data[0].teamBRun;
            $scope.live.teamBWicket=data[0].teamBWicket;
            $scope.live.teamBOvers=data[0].teamBOvers;
			$scope.live.currentPlayer1=data[0].currentPlayer1Name;
			$scope.live.currentPlayer1Score=data[0].currentPlayer1Score;
			$scope.live.currentPlayer2=data[0].currentPlayer2Name;
			$scope.live.currentPlayer2Score=data[0].currentPlayer2Score;
			$scope.live.status=data[0].status;
})
});