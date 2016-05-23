'use strict';

angular.module('app')
    .config(routeConfig)
;

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
                abstract: true,
                url: "",
                templateUrl: "components/common/content.html"
            })
            .state('index.requests_quotes', {
                url: "/requests-quotes",
                templateUrl: "app/pages/requests_quotes/views/request_quotes.list.html",
                controller: 'RequestQuotesListController',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['plugins/iCheck/custom.css',
                                    'plugins/iCheck/icheck.min.js',
                                    'plugins/bootstrap-markdown/bootstrap-markdown.js',
                                    'plugins/bootstrap-markdown/markdown.js',
                                    'plugins/bootstrap-markdown/bootstrap-markdown.min.css'
                                ]
                            },
                            {
                                files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                            }
                        ]);
                    }
                }
            })

            //jobs
            .state('index.jobs', {
                url: "/jobs",
                templateUrl: "app/pages/jobs/views/jobs.list.html",
                controller: 'JobsListController',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['plugins/iCheck/custom.css',
                                    'plugins/iCheck/icheck.min.js',
                                    'plugins/bootstrap-markdown/bootstrap-markdown.js',
                                    'plugins/bootstrap-markdown/markdown.js',
                                    'plugins/bootstrap-markdown/bootstrap-markdown.min.css'
                                ]
                            },
                            {
                                files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                            }
                        ]);
                    }
                }
            })

            //login
            .state('login', {
                'url': '/login',
                'templateUrl': 'app/pages/login/views/login.html',
                'controller': 'LoginCtrl as ctrl',
                'data': {
                    'specialClass': 'security'
                }
            })

            //register
            .state('register', {
                'url': '/register?accountId',
                'templateUrl': 'app/pages/register/views/register.html',
                'controller': 'RegisterCtrl as ctrl',
                'data': {
                    'specialClass': 'security'
                }
            })

            //password email
            .state('password-email', {
                url: "/password/email",
                templateUrl: "app/pages/forgot_password/views/forgot.password.email.html",
                controller: "ForgotPasswordEmailCtrl as ctrl",
                'data': {
                    'specialClass': 'security'
                }
            })

            //password reset
            .state('password-reset', {
                url: "/password/reset/:token?email",
                templateUrl: "app/pages/forgot_password/views/forgot.password.reset.html",
                controller: "ForgotPasswordResetCtrl as ctrl",
                'data': {
                    'specialClass': 'security'
                }
            })

            //profile
            .state('index.profile', {
                url: "/profile",
                templateUrl: "app/pages/profile/views/profile.html",
                controller: "viewProfileCtrl as ctrl"
            })

            //view request
            .state('index.view-request', {
                url: "/requests-quotes/view-request",
                templateUrl: "app/pages/requests_quotes/views/view_request.html",
                controller: "viewRequestCtrl as ctrl"
            })

            //job details
            .state('index.job-details', {
                url: "/jobs/job-details",
                templateUrl: "app/pages/jobs/views/job_details.html",
                controller: "jobDetailsCtrl as ctrl"
            })

            //deals & promotions
            .state('index.deals-promotions', {
                url: "/deals-promotions",
                templateUrl: "app/pages/deals/views/deals_promotions.html",
                controller: "viewDealsPromotionsCtrl as ctrl"
            })

            //edit deal
            .state('index.edit-deal', {
                url: "/deals-promotions/edit-deal",
                templateUrl: "app/pages/deals/views/edit_deal.html",
                controller: "viewEditDealCtrl as ctrl"
            })

            //new deal
            .state('index.new-deal', {
                url: "/deals-promotions/new-deal",
                templateUrl: "app/pages/deals/views/new_deal.html",
                controller: "viewNewDealCtrl as ctrl"
            })

            //claims
            .state('index.claims', {
                url: "/claims",
                templateUrl: "app/pages/claims/views/claims.html",
                controller: "viewClaimsCtrl as ctrl"
            })

            //my services
            .state('index.my-services', {
                url: "/my-services",
                templateUrl: "app/pages/my_services/views/my_services.html",
                controller: "viewServicesCtrl as ctrl"
            })

            //define service
            .state('index.define-service', {
                url: "/my-services/define-service",
                templateUrl: "app/pages/my_services/views/define_service.html",
                controller: "viewdefineServiceCtrl as ctrl"
            })

            //settings
            .state('index.settings', {
                url: "/settings",
                templateUrl: "app/pages/settings/views/settings.html",
                controller: "viewSettingsCtrl as ctrl"
            })

            //settings payment
            .state('index.settings-payment', {
                url: "/settings/payment",
                templateUrl: "app/pages/settings/views/settings.payment.html",
                controller: "settingsPaymentCtrl as ctrl"
            })

            //friends
            .state('index.friends', {
                url: "/friends",
                templateUrl: "app/pages/friends/views/friends.html",
                controller: "viewFriendsCtrl as ctrl"
            })

            //invite a friend
            .state('index.invite-friend', {
                url: "/invite-friend",
                templateUrl: "app/pages/friends/views/invite_friend.html",
                controller: "viewInviteFriendCtrl as ctrl"
            })

            //authorize ezier
            .state('index.authorize-ezier', {
                url: "/invite-friend/authorize-ezier",
                templateUrl: "app/pages/friends/views/authorize_ezier.html",
                controller: "viewAuthorizeCtrl as ctrl"
            })

            //facebook friends
            .state('index.facebook-friends', {
                url: "/invite-friend/facebook-friends",
                templateUrl: "app/pages/friends/views/facebook_friends.html",
                controller: "viewFacebookFriendsCtrl as ctrl"
            })

            //friend profile
            .state('index.friend-profile', {
                url: "/friends/friend-profile",
                templateUrl: "app/pages/friends/views/friend_profile.html",
                controller: "viewFriendProfileCtrl as ctrl"
            })

            //inbox
            .state('index.inbox', {
                url: "/inbox",
                templateUrl: "app/pages/inbox/views/inbox.html",
                controller: "inboxCtrl as ctrl"
            })

            //inbox read message
            .state('index.read_message', {
                url: "/inbox/read_message",
                templateUrl: "app/pages/inbox/views/read_message.html",
                controller: "readMessageCtrl as ctrl"
            })

            //inbox user message
            .state('index.user_message', {
                url: "/inbox/user_message",
                templateUrl: "app/pages/inbox/views/user_message.html",
                controller: "userMessageCtrl as ctrl"
            })

        ;

        $urlRouterProvider.otherwise('/login');
    }