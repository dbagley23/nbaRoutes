var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .when('/teams/:team', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    resolve: {
      teamData: function(teamService, $route){
        debugger;
        return teamService.getTeamData($route.current.params.team)
      }
    }
  })
  .otherwise({
    redirectTo: '/'
  })
  
});

// app.config(function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'js/home/homeTmpl.html',
//       controller: 'homeCtrl'
//     })
//     .when('/settings', {
//       templateUrl: 'js/settings/settingsTmpl.html',
//       controller: 'settingsCtrl'
//     })
//     .when('/products/:id', {
//       templateUrl: 'js/products/productTmpl.html',
//       controller: 'productsCtrl'
//     })
//     .otherwise({
//       redirectTo: '/'
//     })
// });
