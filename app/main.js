/**
 * Created by apium on 12/31/2016.
 */
var app = angular.module('caringbox', [
    'ui.bootstrap'
]);

app.controller('MainController', ['$scope', '$location', MainController]);

function MainController($scope, $location) {
    if ($location.absUrl().indexOf('tamsoatungthudotquy.net') > -1) {
        $scope.content = 'tam-soat-ung-thu-dot-quy.html';
    }
}