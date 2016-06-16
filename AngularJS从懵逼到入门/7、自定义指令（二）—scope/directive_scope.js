/**
 * Created by wqq on 2016/6/16.
 */
var myApp = angular.module('myApp', [])
    .controller('myAppCtr', ['$scope', function ($scope) {
        $scope.name='这是控制器的name';
        $scope.hello=function(){
            console.log('hello world');
        }
        console.log('控制器');
    }])
    .directive('directiveScope', function () {
        return {
            scope: {
                names:'&',
                say:'&say'
            },
            controller: function ($scope) {
                console.log($scope.names());
                $scope.say()();
            },
            restrict:'EACM',
            template:'<div>正在进行scope独立作用域测试</div>',
            replace:true
        }
    })