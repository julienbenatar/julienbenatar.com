angular.module('jb', ['ngAnimate']);

// app.config(['$routeProvider',
	// function($routeProvider) {
	// 	$routeProvider.
	// 	when('/music', {
	// 		templateUrl: 'partials/phone-list.html',
	// 		controller: 'PhoneListCtrl'
	// 	}).
	// 	when('/phones/:phoneId', {
	// 		templateUrl: 'partials/phone-detail.html',
	// 		controller: 'PhoneDetailCtrl'
	// 	}).
	// 	otherwise({
	// 		redirectTo: '/phones'
	// 	});
	// }
// ]);

angular.module('jb').directive('jbBackgroundVideo', function() {
	'use strict';
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'templates/background-video.html',
		link: function(scope, element) {
			scope.isPlayer = false;
			scope.video = element.find('video');
			scope.video.bind('canplaythrough', function() {
				scope.playVideo();
			});

		},
		controller: function($scope) {
			$scope.playVideo = function() {
				$scope.video[0].play();
				$scope.isPlaying = true;
			};

			$scope.pauseVideo = function() {
				$scope.video[0].pause();
				$scope.isPlaying = false;
			};
		}
	};
});
