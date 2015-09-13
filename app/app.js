angular.module('jb', []);

angular.module('jb').directive('jbBackgroundVideo', function() {
	'use strict';
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'app/components/backgroundVideo/backgroundVideo.html',
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
		templateUrl: 'app/components/menu/menu.html'
	};
});
