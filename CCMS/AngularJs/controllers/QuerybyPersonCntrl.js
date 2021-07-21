ccmsApp.controller('QuerybyPersonCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.SearchbyPerson = function () {
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowPersonDetails1 = function () {
        $scope.ShowPersonDetails = true;
        $scope.IsShowSearchdata = false;
    }

    $scope.BacltoList = function () {
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
    }
    $scope.showDocument = function () {
        //$scope.ShowIframe = false;
        $timeout(function () {
            $scope.ShowIframe = true;
        }, 2000);
    }
    $scope.changeIDType = function (id_type) {
        $scope.IdNumber = id_type;
    }
});