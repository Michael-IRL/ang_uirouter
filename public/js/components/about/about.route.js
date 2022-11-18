(function(){
  'use strict';
  
  /* @ngInject */
  function routerState($stateProvider) {
    let aboutState = {
      name: 'about',
      url: '/about',
      controller: 'AboutController',
      templateUrl: 'js/components/about/about.html',
    };
    $stateProvider.state(aboutState);
  }

  angular
    .module('app.about.routes',[
      'app.about.controller',
      'directive.customDateInput',
      'directive.customValidation'
    ])
    .config(routerState);
})()