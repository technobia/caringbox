/**
 * Created by apium on 12/31/2016.
 */
var app = angular.module('caringbox', [
    'ui.bootstrap'
]);

app.controller('MainController', ['$scope', '$location', MainController]);

function MainController($scope, $location) {
    if ($location.absUrl().indexOf('localhost') > -1) console.log(true);
}