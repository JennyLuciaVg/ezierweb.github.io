angular.module('app')
    .controller('viewRequestCtrl', function ($window, $scope, $http) {

        $scope.request = {
            viewRequest: true,
            quote: false,
            messages: false,
        
        };

        $scope.showView = function () {
            $scope.request = {
                viewRequest: true,
                quote: false,
                messages: false,
            };
        };

        $scope.showQuote = function () {
            $scope.request = {
                viewRequest: false,
                quote: true,
                messages: false,
            };
        };
        
        $scope.showMessages = function () {
            $scope.request = {
                viewRequest: false,
                quote: false,
                messages: true,
            };
        };


        $scope.views = {
            details: true,
            notes: false,
            attachments: false,
            payment: false
        };

        $scope.showDetails = function () {
            $scope.views = {
                details: true,
                notes: false,
                attachments: false,
                payment: false
            };
        };

        $scope.showNotes = function () {
            $scope.views = {
                details: false,
                notes: true,
                attachments: false,
                payment: false
            };
        };

        $scope.showAttachments = function () {
            $scope.views = {
                details: false,
                notes: false,
                attachments: true,
                payment: false
            };
        }

        $scope.showPayment = function () {
            $scope.views = {
                details: false,
                notes: false,
                attachments: false,
                payment: true
            };
        }



    })
;