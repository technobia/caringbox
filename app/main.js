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
        $scope.isPageOne = true;
        $scope.type = 1;
    } else if ($location.absUrl().indexOf('thucphamchongungthu.net') > -1) {
        $scope.content = 'thuc-pham-chong-ung-thu.html';
        $scope.isPageTwo = true;
        $scope.type = 2;
    } else if ($location.absUrl().indexOf('dulichnuocngoaimienphi.net') > -1) {
        $scope.content = 'du-lich-nuoc-ngoai-mien-phi.html';
        $scope.isPageThree = true;
        $scope.type = 3;
    }
}