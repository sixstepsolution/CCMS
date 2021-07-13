ccmsApp.controller('QuerybyPersonCntrl', function ($scope, $timeout, MasterService, ReceiveInbondService) {
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.showNewCall = false;
    $scope.IsBack = false;
    $scope.IsData = false;
    $scope.IsSaving = false;
    $scope.ReceiveInbondCallList = [];


    $scope.filterModal = {};
    $scope.ModelData = {};

    // Validate Personal Form
    $scope.Is_FormValid = false;
    $scope.Submitted = false;
    $scope.$watch('ReceiveInbondForm.$valid', function (newValue) {
        // alert(newValue);
        $scope.Is_FormValid = newValue;
    });


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



    $scope.LoadAllMasterData = function () {
        //MasterService.Login(loginModel).then(function (res) {
        //    if (res.data.success === true) {

        //    }
        //    else {

        //    }
        //}).catch(function (response) {
        //    console.log(response);

        //});
       
    }

    //$scope.LoadAllMasterData();


    $scope.SaveReceiveInBondCall = function () {
        console.log($scope.ModelData)
        $scope.IsSaving = true;
        ReceiveInbondService.SaveReceiveInBondCall($scope.ModelData).then(function (res) {
            if (res.data.success === true) {
                toastr["success"](res.data.message);
                $scope.IsSaving = false;


                $scope.showNewCall = false;
                $scope.showReceiveInbondCall = false;
                $scope.ShowPersonDetails = false;
                $scope.IsShowSearchdata = false;
                $scope.IsBack = false;
                $scope.IsData = false;
            }
            else {
                toastr["error"](res.data.message);
                $scope.IsSaving = false;
            }
        }).catch(function (response) {
            console.log(response);
            toastr["error"]('An Error Occured');
            $scope.IsSaving = false;
        });
    }


    $scope.SearchbyPerson = function (inputs) {         
        ReceiveInbondService.GetReceiveInbondingCall($scope.filterModal).then(function (res) {
            $scope.ReceiveInbondCallList = [];
            if (res.data.success === true) {
                $scope.ReceiveInbondCallList = res.data.result;

                $scope.showNewCall = false;
                $scope.ShowPersonDetails = false;
                $scope.showReceiveInbondCall = false;
                $scope.IsShowSearchdata = true;
                $scope.IsBack = false;
                $scope.IsData = false;
            }
            else {
                $scope.ReceiveInbondCallList = [];
            }
        }).catch(function (response) {
            console.log(response);

        });
    }

});