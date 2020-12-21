(function(){
'use strict';
    angular.module('testapp',[])

    .controller('testcontroller',function($scope){
 //       $scope.name="nittya";
 //       $scope.sayhello=function(){
 //           return "coursera";
 //       };

        $scope.name="";
        $scope.totalvalue=0;

        $scope.displaynumeric=function (){
            var totalnamevalue=calculatenumericforstring($scope.name);    //get total value
            $scope.totalvalue=totalnamevalue;
        };
        function calculatenumericforstring(String){
            var totalstringvalue=0;
            for(var i=0 ; i < String.length ; i++){
                totalstringvalue += String.charCodeAt(i);
            }
            return totalstringvalue;
        }

    });

})();

