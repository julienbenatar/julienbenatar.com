angular.module('jb', ['ngAnimate']);

angular.module('jb').directive('jbBackgroundVideo', function() {
	'use strict';
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'templates/background-video.html',
		link: function(scope, element) {
			scope.isPlaying = false;
			scope.video = element.find('video');

			scope.video.on('canplaythrough', function() {
				scope.togglePlay();
				scope.$apply(function() {
					scope.isPlaying = true;
				});

				scope.video.off('canplaythrough');
			});
		},
		controller: function($scope) {
			$scope.togglePlay = function() {
				if ($scope.isPlaying === false) {
					$scope.video[0].play();
					$scope.isPlaying = true;
				}
				else {
					$scope.video[0].pause();
					$scope.isPlaying = false;
				}

			};
		}
	};
});

angular.module('jb').directive('jbMenu', function() {
	'use strict';
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'templates/menu.html'
	};
});
