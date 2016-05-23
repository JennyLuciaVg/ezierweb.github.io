angular.module('app')
    .controller('settingsPaymentCtrl', function ($window, $scope, $http) {

        $scope.userId = $window.sessionStorage.userId;

        $scope.views = {
            payment: true,
            addCard: false
        };

        $scope.showAddCard = function() {
            $scope.views = {
                payment: false,
                addCard: true
            };
        };

        $http.get('api/users/'+$scope.userId+'?include=account,cards')
            .then(function(res) {
                $scope.cards = res.data.cards.data;
            });

        $scope.cancelCard = function() {
            $scope.views = {
                payment: true,
                addCard: false
            };
        };

        $scope.stripeCallback = function (code, result) {
            if (result.error) {
                $scope.stripeError = result.error.message;
                console.log($scope.stripeError);
            } else {
                $scope.stripeToken = result.id;

                $scope.data = {
                    token: $scope.stripeToken,
                    user_id: $scope.userId
                };
                $http.post('api/transactions/cards/store_card', $scope.data)
                    .then(function(res) {
                        $scope.views = {
                            payment: true,
                            addCard: false
                        };
                    });
            }
        };

    })
;