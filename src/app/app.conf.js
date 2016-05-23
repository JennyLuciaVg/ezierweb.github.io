(function () {
    'use strict';

    angular
        .module('app')
        .config(apiConfig)
    ;

    apiConfig.$inject = [ 'oAuthProvider', 'clientId', 'apiPath'];

    /* @ngInject */
    function apiConfig (oAuthProvider, clientId, apiPath) {
        oAuthProvider.config({
            apiPath          : apiPath,
            clientId         : clientId,
            loginPath        : 'api/login',
            loginState       : 'login',
            exclude          : ['register', 'password-email', 'password-reset'],
            passwordEmailPath: 'api/password/email',
            passwordResetPath: 'api/password/reset'
        });
    }

})();