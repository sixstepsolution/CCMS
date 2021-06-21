ccmsApp.controller('QuerybyPersonCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.showNewCall = false;
    $scope.IsBack = false;
    $scope.IsData = false;
    
    $scope.SearchbyPerson = function () {
        $scope.showNewCall = false;
        $scope.ShowPersonDetails = false;
        $scope.showReceiveInbondCall = false;
        $scope.IsShowSearchdata = true;
        $scope.IsBack = false;
        $scope.IsData = false;

    }

    $scope.SearchDetailsPerson = function () {
        $scope.ShowPersonDetails = true;
        $scope.IsShowSearchdata = false;
        $scope.showReceiveInbondCall = false;
        $scope.showNewCall = false;
        $scope.IsBack = true;
        $scope.IsData = true;

    }

    $scope.NewReciveInbondCall = function () {
        $scope.showNewCall = true;
        $scope.ShowPersonDetails = false;
        $scope.showReceiveInbondCall = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = false;
    }

    $scope.BacltoList = function () {
        $scope.showNewCall = false;
        $scope.showReceiveInbondCall = false;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = false;
        $scope.IsData = false;
    }
    $scope.ShowReceiveIbondCalls = function () {
        $scope.showNewCall = false;
        $scope.showReceiveInbondCall = true;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = true;
    }
    
    $scope.addModel = function (val) {
        $scope.modelValue = val;
    }
});