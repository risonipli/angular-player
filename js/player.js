'use strict';

angular.module('app', [])
.controller('PlayerCtrl', ['$scope',
function($scope) {
	$scope.player = new Audio();
	$scope.player.src = "music/song.mp3";

	function loadedmetadata() {
		$scope.$apply(function() {
			$scope.duration = $scope.player.duration;			
		})
	};

	function timeupdate() {
		$scope.$apply(function() {
			$scope.currentTime = $scope.player.currentTime;
		})
	}

	$scope.player.onloadedmetadata = loadedmetadata;

	$scope.player.ontimeupdate = timeupdate;

	$scope.currentTime = 0;

	$scope.play = function() {
		if ($scope.player.paused) {
			$scope.player.play();
		} else {
			$scope.player.pause();
		}
	};

	$scope.mute = function() {
		$scope.player.muted = !$scope.player.muted;
	}

}])