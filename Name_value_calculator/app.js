(function(){
'use strict';
angular.module('angularJS1',[])
.controller('controller1',function($scope)
{
	$scope.name = "";
	$scope.totalval = 0;
	$scope.displayNum = function(){
		var totalName= NumtoString($scope.name)
		$scope.totalval = totalName; };

function NumtoString(string)
{var totalString = 0;
		for(var i =0; i < string.length; i++){
			totalString += string.charCodeAt(i);
		}
		return totalString;
	}
}
);
})();