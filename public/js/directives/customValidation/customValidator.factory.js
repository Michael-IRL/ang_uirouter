(function(){
  'use strict';
  
  function CustomValidatorFactory() {  
    return {
      create: function (name, triggers, isValid, formattedValue) {      
        return {
          name: name,
          isValid: isValid,
          triggers: triggers,
          formattedValue: formattedValue,
        }
      },
    }
  }
  
  angular
    .module('app.CustomValidatorFactory', [])
    .factory('CustomValidatorFactory', CustomValidatorFactory);  
})()