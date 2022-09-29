(function(){
  'use strict';

  AboutController.$inject = ['$scope','CustomValidatorFactory']
  function AboutController($scope,customValidatorFactory){
    $scope.name = 'my name'

    let numberValidation = customValidatorFactory.create(
      'numberValidation',
      [numberValidationTrigger],
      numberIsValid
    );

    let startDateValidation = customValidatorFactory.create(
      'startDateValidation',
      [startDateTrigger],
      startDateIsValid
    );

    $scope.numberValidation = [numberValidation]

    $scope.startDateValidation = [startDateValidation]

    function numberValidationTrigger(){
      return $scope.number
    }
  
    function numberIsValid(value,elem){
      return value < 10;
    }

    function startDateTrigger(){
      return $scope.startDate;
    }
    
    function startDateIsValid(value,elem){
      return !!$scope.startDate;
    }

  }
  
  angular
    .module('app.about.controller',[
      'app.CustomValidatorFactory'
    ])
    .controller('AboutController',AboutController)
})()