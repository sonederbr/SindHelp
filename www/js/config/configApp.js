angular.module('starter')

.config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('main', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  .state('main.dash', {
    url: 'main/dash',
    views: {
        'dash-tab': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashCtrl'
        }
    }
  })
  .state('main.public', {
    url: 'main/public',
    views: {
        'public-tab': {
          templateUrl: 'templates/public.html',
          controller: 'ordersCtrl'
        }
    }
  })
  .state('main.admin', {
    url: 'main/admin',
    views: {
        'admin-tab': {
          templateUrl: 'templates/admin.html'
        }
    },
    data: {
      authorizedRoles: [USER_ROLES.admin]
    }
  })
  .state('main.account', {
    url: 'main/account',
    views: {
        'account-tab': {
          templateUrl: 'templates/account.html'
        }
    }
  })
  .state('main.chamados', {
    url: 'main/chamados',
    views: {
      'chamados': {
        templateUrl: 'templates/chamado/chamados.html',
        controller: 'chamadoCtrl'
      }
    }
  })
  .state('main.chamado-detalhe', {
    url: 'main/chamados/:chamadoId',
    views: {
      'chamados': {
        templateUrl: 'templates/chamado/chamado-detalhe.html',
        controller: 'chamadoDetalheCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/main/dash');
})

.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})
 
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authHttpRequestInterceptor');
})
