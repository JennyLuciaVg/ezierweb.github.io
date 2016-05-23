(function () {
    'use strict';

    angular
        .module('app')
        .directive('switcherAccount', switcherAccount);

    switcherAccount.$inject = ['$compile'];

    /* @ngInject */
    function switcherAccount($compile) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                accountType: '=ngModel'
            },
            replace: true
        };
        return directive;

        function link(scope, element, attrs) {
            var btn = $('<img class="switcher-account" src="assets/images/icons/profile-switcher-account-type.png">');
            element.before(btn);

            scope.accountType !== 1 ? btn.addClass('rotate') : btn.removeClass('rotate');
            btn.bind('click', click);

            function click(e) {
                e.preventDefault();

                var accountType;
                if (scope.accountType != null)
                    accountType = scope.accountType === 1 ? 2 : 1;
                else
                    accountType = 1;

                scope.$apply(function () {
                    scope['accountType'] = accountType;
                });

                scope.accountType !== 1 ? btn.addClass('rotate') : btn.removeClass('rotate');
            }
        }
    }

})();

