angular.module('app')
    .controller('viewProfileCtrl', function ($window, $scope, $http) {

        $scope.profile = {
            info: true,
            interests: false,

        };

        $scope.showInfo = function () {
            $scope.profile = {
                info: true,
                interests: false,

            };
        };

        $scope.showInterests = function () {
            $scope.profile = {
                info: false,
                interests: true,

            };
        };

      



    })
;