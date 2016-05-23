'use strict';

angular.module('app', [
    'app.config',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'oauth',
    'toaster',
    'ngAnimate',
    'oc.lazyLoad',
    'angularPayments',
    'rzModule'
])
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    })
;
