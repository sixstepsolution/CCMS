ccmsApp.controller('AddLodgementBookingCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.ShowPersonDetails = true;
    $scope.ShowInboxList = true;
    $scope.ShowPersonDetailsNew = false;
    $scope.ShowResolveCallcentreDetails = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.SearchbyPerson = function () {
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowPersonDetails1 = function () {
        $scope.ShowPersonDetails = false;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = true;
        $scope.IsShowSearchdata = false;
    }

    $scope.ShowNewPersonDetails = function () {
        $scope.ShowPersonDetails = false;
        $scope.ShowPersonDetailsNew = true;
        $scope.ShowResolveCallcentreDetails = false;
        $scope.IsShowSearchdata = false;
    }

    $scope.BacktoSearch = function () {
        $scope.IsShowSearchdata = false;
        $scope.ShowPersonDetails = true;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = false;
    }

    $scope.BacktoList = function () {
        $scope.IsShowSearchdata = false;
        $scope.ShowPersonDetails = true;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = false;
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