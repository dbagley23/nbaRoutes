var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
  if ($routeParams.team === 'utahjazz') {
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if ($routeParams.team === 'losangeleslakers') {
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = 'images/lakers-logo.png';
  } else if ($routeParams.team === 'miamiheat') {
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  }
  $scope.teamData = teamData;
	  var currentTime = new Date();
  $scope.newGame = {homeTeam: $scope.homeTeam.split(' ').join('').toLowerCase(),
    homeTeamScore: $scope.homeTeamScore,
    opponentScore: $scope.opponentTeamScore,
    };
  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function(){
    if ($scope.showNewGameForm === false){
      $scope.showNewGameForm = true;
    } else {
      $scope.showNewGameForm = false;
    }
  }
  
  $scope.submitGame = function(){
    $scope.newGame.homeTeamScore = $scope.homeTeamScore;
    $scope.newGame.opponentScore = $scope.opponentTeamScore;
    $scope.newGame.opponent = $scope.visitors;
    debugger;
    teamService.addNewGame($scope.newGame).then(function(data){
      debugger;
      teamService.getTeamData($scope.newGame.homeTeam)
    })
    
  }
 $scope.visitors = '';  
 $scope.homeScore = '';
 $scope.opponentScore = ''; 
  
});