(function(){
    'use strict';
    /*
    <div id="startDate" name="startDate" class="form-controlGroup-inputWrapper" custom-date-input ng-model="$root.covers.startDate" ng-required="!!$root.covers.startDate && submitted && $root.getIsVisible('ChooseStart')" custom-validation="dateValidation" unavailable-before="minDate" unavailable-after="maxDate" analytics-tracker="covers"></div> 
    */

    function customDateInputDirective() {
        return {
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            scope: {
                model: '=ngModel',
                required: '=?',
                unavailableAfter: '=?',
                unavailableBefore: '=?'
            },
            controller: 'CustomDateInputController',
            controllerAs: 'customDate',
            templateUrl: 'js/directives/customDateInput/template.html',
            /*template:`<div class="form-input form-input--customDate">
    <input type="tel" class="form-input form-input--dd" autocomplete="off" id="{{customDate.elementName}}Day" scroll-to-element placeholder="DD" ng-model="day" maxlength="2" ng-change="verifyDay(day)" ng-trim="false">
    <input type="tel" class="form-input form-input--mm" autocomplete="off" id="{{elementName}}Month" scroll-to-element placeholder="MM" ng-model="month" maxlength="2" ng-change="verifyMonth(month)" ng-trim="false">
    <input type="tel" class="form-input form-input--yyyy" autocomplete="off" id="{{elementName}}Year" scroll-to-element placeholder="YYYY" ng-model="year" maxlength="4" ng-change="verifyYear(year)" ng-trim="false">
</div>`,*/
            link: function (scope, element, attrs, modelCtrl){                
                    scope.elementName = attrs.name;
                    scope.modelCtrl = modelCtrl;                              
                }            
            
        }
    }

    angular
    .module('directive.customDateInput',[
        'directives.CustomDateInputController'
    ])
    .directive('customDateInput', customDateInputDirective);
})()
