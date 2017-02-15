(function() {

  angular
    .module('meanApp')
    .controller('updateCtrl', updateCtrl);

  updateCtrl.$inject = ['$location', 'meanData'];
  function updateCtrl($location, meanData) {
    var vm = this;

    vm.user = {
      name: ''
    };

    vm.onSubmit = function () {
      meanData.updateProfile(vm.user).then(function () {
        console.log('Update name', vm.user);
        $location.path('profile');
      });
    }
  }

})();