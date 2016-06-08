angular.module('starter')

.factory('authInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  var _responseError = function (response) {
    $rootScope.$broadcast({
      401: AUTH_EVENTS.notAuthenticated,
      403: AUTH_EVENTS.notAuthorized
    }[response.status], response);
    return $q.reject(response);
  }
  
  return {
    responseError: _responseError
  };
})

.factory("authHttpRequestInterceptor",  function ($rootScope) {
  //var authData = AuthService.getToken(); 
  var authToken = window.localStorage.getItem('yourTokenKey');  
  var _request = function (config) {            
    if (authToken) 
       config.headers["Authorization"] = 'Bearer ' +  authToken;
    return config;     
  }
  
  return {  
     request: _request
  }  
});

