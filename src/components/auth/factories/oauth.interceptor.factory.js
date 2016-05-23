(function () {
    'use strict';

    angular
        .module('oauth')
        .factory('oAuthInterceptor', oAuthInterceptor);

    oAuthInterceptor.$inject = ['$q', '$window', '$injector', 'oAuth', 'toaster'];

    /* @ngInject */
    function oAuthInterceptor($q, $window, $injector, oAuth, toaster) {

        return {
            request: request,
            responseError: responseError
        };

        function request(config) {

            if (config.url.match(/^(api\/.*)/)) {
                config.url = oAuth.conf.apiPath + config.url;
            }

            if ($window.sessionStorage.token != null) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }

            return config;
        }

        function responseError(rejection) {

            var $state = $injector.get('$state');

            var response = rejection.data;

            if (response.description) {
                for (var error_type in response.description) {
                    if (response.description.hasOwnProperty(error_type)) {
                        var body = response.description[error_type];
                        toaster.error({body: body, title: 'Validation Error'});
                    }
                }
            } else {
                if (response.message != null && typeof response.message == "string") {
                    var title = 'Error';
                    if (response.type != null) {
                        title = response.type;
                    }
                    toaster.error({body: response.message, title: title});
                }
            }

            if (rejection.status === 401 && rejection.data.type !== 'invalid_credentials') {
                $state.go(oAuth.conf.loginState);
            } else if (rejection.status == 400 && rejection.data.type == 'invalid_request') {
                $state.go(oAuth.conf.loginState);
            }

            return $q.reject(rejection);
        }
    }

})();

