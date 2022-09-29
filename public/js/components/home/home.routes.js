(function(){
  'use strict';
  
  /* @ngInject */
  function routerState($stateProvider) {
    let helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>',
    };  

    $stateProvider.state(helloState);
    
  }

  angular
    .module('app.home.routes',[])
    .config(routerState);
})()