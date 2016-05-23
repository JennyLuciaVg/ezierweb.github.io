angular.module('app')
    .controller('viewSettingsCtrl', function ($window, $scope, $http) {


        $scope.views = {
            general: true,
            notifications: false,
            privacy: false,
            payment: false
        };

        $scope.showGeneral = function () {
            $scope.views = {
                general: true,
                notifications: false,
                privacy: false,
                payment: false
            };
        };

        $scope.showNotifications = function () {
            $scope.views = {
                general: false,
                notifications: true,
                privacy: false,
                payment: false
            };
        };

        $scope.showPrivacy = function () {
            $scope.views = {
                general: false,
                notifications: false,
                privacy: true,
                payment: false
            };
        }

        $scope.showPayment = function () {
            $scope.views = {
                general: false,
                notifications: false,
                privacy: false,
                payment: true
            };
        }


    })
;