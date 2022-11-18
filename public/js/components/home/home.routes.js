(function(){
  'use strict';
  
  /* @ngInject */
  function routerState($stateProvider) {
    let helloState = {
      name: 'hello',
      url: '/hello',
      controller :'HomeController',
      templateUrl: 'js/components/home/home.html',
      
    };  

    $stateProvider.state(helloState);
    
  }

  angular
    .module('app.home.routes',[
      'app.home.controller'
    ])
    .config(routerState);
})()