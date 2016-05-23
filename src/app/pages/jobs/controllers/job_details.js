angular.module('app')
    .controller('jobDetailsCtrl', function ($window, $scope, $http) {


        $scope.currentView = 'viewJob';

        console.log($scope.currentView);


        $scope.changeView = function(newView){
            $scope.currentView = newView;
            console.log($scope.currentView);
        };

        $scope.slider = {
            value: 100,
            options: {
                hidePointerLabels: true,
                hideLimitLabels: true,
                showSelectionBar: true,
                getSelectionBarColor: function(value) {
                    return '#00afb5';
                },
                getPointerColor: function(value) {
                    return '#fefefe';
                }

            }
        };



    })
;