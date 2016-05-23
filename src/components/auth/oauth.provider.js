(function () {
    'use strict';

    angular
        .module('oauth')
        .provider('oAuth', oAuthProvider);

    oAuthProvider.$inject = [];

    /* @ngInject */
    function oAuthProvider() {

        var self = this;

        self.$get = apiAuth;
        self.config = config;

        self.conf = {
            loginPath: 'oauth/login',
            clientId: '',
            exclude: []
        };

        apiAuth.$inject = [];

        function config(config) {
            validate(config);
            self.conf = angular.extend({}, self.conf, config);
        }

        function apiAuth() {
            return self;
        }
    }

    function validate(config) {

        //check auth array
        if (config.clientId == null) {
            throw new OAuthException('You must define the clientId param');
        }
    }

})();