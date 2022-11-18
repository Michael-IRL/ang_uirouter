(function(){
  'use strict';
  HomeController.$inject = ['$window','$rootScope','$scope']
  function HomeController($window,$rootScope,$scope){

    this.$onInit = function onInit() {
      console.log('init called')
      if(!$rootScope.paymentHandler){
        $rootScope.paymentHandler = true;
        $window.addEventListener("message",paymentHandler);
        window.addEventListener("message",paymentHandler2);
      }
      
    }

    $scope.reload = function(){
      console.log('reload clicked');
      $rootScope.reloadPage();
    }
    function paymentHandler(event){
      console.log(event);
    }

    function paymentHandler2(event){
      console.info(event);
    }
  }

  angular
    .module('app.home.controller',[])
    .controller('HomeController',HomeController)
})()