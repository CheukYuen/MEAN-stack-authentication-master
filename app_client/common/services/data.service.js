(function() {

  angular
    .module('meanApp')
    .service('meanData', meanData);

  meanData.$inject = ['$http', 'authentication'];
  function meanData ($http, authentication) {

    var getProfile = function () {
      return $http.get('/api/profile', {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      });
    };

    var updateProfile = function (user) {
      return $http.post('/api/update', user, {
        headers: {
          Authorization: 'Bearer '+ authentication.getToken()
        }
      })

    };

    return {
      getProfile : getProfile,
      updateProfile: updateProfile
    };
  }

})();