(function(){
  'use strict';
  runFunction.$inject = ['$rootScope','$state']

  function runFunction($rootScope, $state){
    $rootScope.reloadPage = reloadPage

    function reloadPage() {
      debugger;
      $rootScope.isReload = true;
      $state.go($state.current, $stateParams, { reload: true });      
    }
  }


  angular
  .module('app', [
      'ui.router',
      'app.about.routes',
      'app.home.routes'
    ])
  .run(runFunction);
})()
