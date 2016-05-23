(function () {
    'use strict';

    angular
        .module('oauth')
        .directive('oauthLogin', login);

    login.$inject = ['oAuthLogin', '$rootScope', '$state', '$location', 'toaster'];

    /* @ngInject */
    function login(oAuthLogin, $rootScope, $state, $location, toaster) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                credentials: '=oauthLogin'
            }
        };
        return directive;

        function link($scope, element, attrs) {
            element.bind('submit', submit);

            function submit(e) {

                e.preventDefault();

                //select button submit
                var submit = element.find('[type=submit]');


                if (!submit.data('loading')) {
                    oAuthLogin($scope.credentials).then(success, error);

                    //disable submit button
                    submit.attr('disabled', true);
                    submit.data('loading', true);
                }

                function success() {
                    if (attrs.redirectTo) {
                        $state.go(attrs.redirectTo);
                    } else if ($rootScope.previousState.name) {
                        $state.go($rootScope.previousState.name);
                    } else {
                        $location.path('/');
                    }
                }

                function error() {

                    //enable submit button
                    submit.attr('disabled', false);
                    submit.data('loading', false);
                }
            }
        }
    }

})();

