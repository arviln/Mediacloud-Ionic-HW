angular.module('mc.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

//.controller('AboutCtrl', function($scope, $ionicModal, $timeout) {

//})

.controller('SearchCtrl', function($scope, $stateParams, MediaCloud){
  $scope.keyword = $stateParams.keyword;
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  $scope.$watch('service.results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.sentenceCount = results.count;
  	} else {
  		console.log("watch got null");
  	}
  });
  console.log("Calling MC from ctrl");
  MediaCloud.recentMentions($scope.keyword);
})

;
