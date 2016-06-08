angular.module('starter').factory('chamadoApi', function($http, config) {
  // Might use a resource here that returns a JSON array
  
  // TipoChamado
  // StatusChamado
  // Ocorrencia
  // DataAbertura
  // DataFechamento
  
  var _getChamados = function () { 
    return $http.get(config.baseUrl + 'api/Chamado').then(function (results) {
        return results;
    });
  };
  
  // var _getChamado = function(chamadoId) {
  //   return $http.get(config.baseUrl + 'api/Chamado/' + chamadoId).then(function (results) {
  //       return results;
  //   });
  // };
  
  var _getChamado = function(chamadoId) {
     return $http.get(config.baseUrl + 'api/Chamado').then(function (results) {
        return results.data[1];
    });
  };

  return {
      getChamados: _getChamados,   
      getChamado: _getChamado,     
      remove: function(chamadoId) {        
      }       
   };  
});
