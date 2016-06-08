angular.module('starter').service('authService', function($q, $http, USER_ROLES, config) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var LOCAL_TOKEN_USERNAME = 'yourUserName';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;
  
  function getToken(){
    authToken = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (authToken) {
      return authToken;
    }
  }

  function loadUserCredentials() {
    authToken = window.localStorage.getItem(LOCAL_TOKEN_KEY);   
    username = window.localStorage.getItem(LOCAL_TOKEN_USERNAME);
    useCredentials(username);
  }

  function storeUserCredentials(response) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, response.access_token);
    window.localStorage.setItem(LOCAL_TOKEN_USERNAME, response.userName)
    useCredentials(response.userName);
  }

  function useCredentials(user) {
    username = user;
    isAuthenticated = true;  

    if (username == 'sindico@sindhelp.com.br') {
      role = USER_ROLES.admin
    }
    if (username == 'user') {
      role = USER_ROLES.public
    }

    // Set the token as header for your requests!
   // $http.defaults.headers.common['X-Auth-Token'] = token;


    //$http.defaults.headers.Authorization = 'Bearer ' + token;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    //$http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  var login = function(name, pw) {
    var data = "grant_type=password&username=" + name + "&password=" + pw;       
    return $q(function(resolve, reject) {
       $http.post(config.baseUrl + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
       .success(function (response) {
          storeUserCredentials(response);
          console.log(response)
          resolve('Login sucesso.');
       })
      .error(function (err, status) {
        console.log(err);
        console.log(status);
          logout();
          reject('Login falhou.');
      });
    });
  };

  var logout = function() {
    destroyUserCredentials();
  };

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };

  loadUserCredentials();

  return {
    login: login,
    logout: logout,
    isAuthorized: isAuthorized,
    getToken: getToken,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;}
  };
});

