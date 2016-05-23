angular
    .module('oauth')
    .run(runPreviousPage);

    runPreviousPage.$inject = ['$rootScope', '$window', '$state', 'oAuth'];

    /* @ngInject */
    function runPreviousPage ($rootScope, $window, $state, oAuth) {
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateChangeStart', stateChangeStart);

        function stateChangeSuccess(ev, to, toParams, from) {
            $rootScope.previousState = from;
        }

        function stateChangeStart(ev, to) {
            var has_token = $window.sessionStorage.token && $window.sessionStorage.token != '';
            var exclude   = [oAuth.conf.loginState].concat(oAuth.conf.exclude);

            if (!has_token && exclude.indexOf(to.name) == -1) {
                ev.preventDefault();
                $state.go(oAuth.conf.loginState);
            }
        }
    }