/**
 * Created by apium on 12/31/2016.
 */
app.controller('ThucPhamChongUngThuController', ['$scope', '$uibModal', ThucPhamChongUngThu]);

function ThucPhamChongUngThu($scope, $uibModal, $uibModalInstance) {
    $scope.data = {};
    $scope.event = {};

    $scope.data.email = '';

    $scope.event.onOpenForm = function() {
        $uibModal.open({
            templateUrl: 'register-form.html',
            controller: ThucPhamChongUngThu,
            backdrop: 'static',
            windowClass: 'register-form'
        });
    };

    $scope.event.dismiss = function() {
        $uibModalInstance.dismiss();
    };
}