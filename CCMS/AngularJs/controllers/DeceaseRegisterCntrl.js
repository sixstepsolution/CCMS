ccmsApp.controller('DeceaseRegisterCntrl', function ($scope, $timeout, MasterService, ReceiveInbondService) {
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.showNewCall = false;
    $scope.IsBack = false;
    $scope.IsData = false;
    $scope.IsSaving = false;
    $scope.isCreate = false;
   // $scope.ShowMiner();
    $scope.ReceiveInbondCallList = [];
    $scope.minerDynamicList = [];
    $scope.MinerModel = {};
    
    //$scope.minerDynamicList = [{
    //    ID: 1,
    //    StartDate: '',
    //    EndDate: '',
    //    Employer: '',
    //    Occupation: '',
    //    Source:''
    //}];

    $scope.OccupationsList = ['Developer','Tester','Designer','Manager','TeamLeader']

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
        $scope.showQuestionnaire = false;
        $scope.showMinorDetails = false;
        $scope.showNewCall = false;
        $scope.IsBack = true;
        $scope.IsData = true;

    }

    $scope.NewReciveInbondCall = function () {
        $scope.isCreate = true;

        $scope.showNewCall = true;
        $scope.ShowPersonDetails = false;
        $scope.showQuestionnaire = false;
        $scope.showReceiveInbondCall = false;
        $scope.showMinorDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = false;
    }
    $scope.Questionnaire = function () {
        $scope.showNewCall = false;
        $scope.showQuestionnaire = true;
        $scope.ShowPersonDetails = false;
        $scope.showReceiveInbondCall = false;
        $scope.showMinorDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = true;
    }
  
    $scope.ShowMiner = function () {
        $scope.showNewCall = false;
        $scope.showReceiveInbondCall = false;
        $scope.showMinorDetails = true;
        $scope.showQuestionnaire = false;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = true;
    }
    $scope.BacltoList = function () {
        $scope.showNewCall = false;
        $scope.showMinorDetails = false;
        $scope.showQuestionnaire = false;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = false;
        $scope.IsData = false;
    }
    $scope.ShowReceiveIbondCalls = function () {
        $scope.ShowMiner();
        $scope.isCreate = false;
        $scope.showNewCall = false;
        $scope.showReceiveInbondCall = true;
        $scope.showQuestionnaire = false;
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
        $scope.showNewCall = false;
        $scope.ShowPersonDetails = false;
        $scope.showReceiveInbondCall = false;
        $scope.IsShowSearchdata = true;
        $scope.IsBack = false;
        $scope.IsData = false;
        //ReceiveInbondService.GetReceiveInbondingCall($scope.filterModal).then(function (res) {
        //    $scope.ReceiveInbondCallList = [];
        //    if (res.data.success === true) {
        //        $scope.ReceiveInbondCallList = res.data.result;

        //        $scope.showNewCall = false;
        //        $scope.ShowPersonDetails = false;
        //        $scope.showReceiveInbondCall = false;
        //        $scope.IsShowSearchdata = true;
        //        $scope.IsBack = false;
        //        $scope.IsData = false;
        //    }
        //    else {
        //        $scope.ReceiveInbondCallList = [];
        //    }
        //}).catch(function (response) {
        //    console.log(response);

        //});
    }

    //Attachments
    $scope.UploadAttachmentLoader = false;

    $scope.AttachmentFiles = [];

    $scope.RemoveAttachment = function (index) {
        $scope.AttachmentFiles.splice(index, 1);
    }

    $scope.UploadAttachment = function () {
        //alert()
        $scope.AttachmentFiles = [];
        var files = $("#Attachment").get(0).files;

        if (files.length < 1) {
            toastr["warning"]('Select files to upload');

            
        } else {
            //alert()
            if ((GetAllFilesSizes(files) + GetAllFilesSizes($scope.AttachmentFiles)) > $scope.maxUploadSize) {
                //alert("E")
                toastr["error"]('Files size exceeded. Max files size allowed is ' + $scope.maxUploadSizeString + '.');
                return false;

            }

            for (var i = 0; i < files.length; i++) {
                
                $scope.AttachmentFiles.push(files[i]);
            }
            console.log($scope.AttachmentFiles);
            //alert("S")
            toastr["success"]('Uploaded successfully.');

            

            $('#Attachment').val('').clone(true);
        }
    }

    $scope.addMinorDetails = function (minormodel) {
        $scope.minerDynamicList.push({
            StartDate: minormodel.StartDate,
            EndDate: minormodel.EndDate,
            Employer: minormodel.Employer,
            Occupation: minormodel.Occupation,
            Source: minormodel.Source
        })
        $scope.MinerModel = {}
    }
    $scope.removeMinorDetailsByIndex = function (index) {
        //alert(index)
        $scope.minerDynamicList.splice(index, 1);
    }

    $scope.changeIDType = function (id_type) {
        $scope.IdNumber = id_type;
    }
    $scope.UniqueNUmbersList = [];
    $scope.IndustryNUmbersList = [];
    $scope.BureauNUmbersList = [];
    $scope.PassportNUmbersList = [];
    $scope.IdentityNUmbersList = [];
    $scope.ForiegnIDNUmbersList = [];
    var dynId =0;
    $scope.addDynamicNumber = function (modelValue, UniqueNumber) {
        $scope.UniqueNUmbersList.push({
            dynId: dynId,
            UniqueNumber: UniqueNumber,
            type: modelValue
        });
        dynId++;
        delete $scope.UniqueNumber;
        //switch (modelValue) {
        //    case 'Industry Number': $scope.IndustryNUmbersList.push({
        //        UniqueNumber: UniqueNumber
        //    });
        //        break;
        //    case 'Bureau Number': $scope.BureauNUmbersList.push({
        //        UniqueNumber: UniqueNumber
        //    });
        //        break;
        //    case 'ID No': $scope.IdentityNUmbersList.push({
        //        UniqueNumber: UniqueNumber
        //    });
        //        break;
        //    case 'Passport Number': $scope.PassportNUmbersList = [];
        //        break;
        //    case 'Foreign ID': $scope.ForiegnIDNUmbersList = [];
        //        break;
        //    default: 
        //        break;
            

        //}
    }
    $scope.removeUniqueNumber = function (SelectedID) {
        //alert(index)
        var selectedIndex = $scope.UniqueNUmbersList.findIndex(x => x.dynId == SelectedID)
        $scope.UniqueNUmbersList.splice(selectedIndex, 1);
    }

    $scope.acceptUniqueNumber = function (modelValue) {
        //console.log($scope.UniqueNUmbersList)
        console.log($scope.UniqueNUmbersList.filter(x => x.type == modelValue))
        $scope.filteredUniqueNumbers = $scope.UniqueNUmbersList.filter(x => x.type == modelValue);
        $scope.selectedUniqueNumberList = $scope.filteredUniqueNumbers.filter(function (item) {
            return item.Selected
        })
        console.log($scope.selectedUniqueNumberList)
        switch (modelValue) {
            case 'Industry Number': $scope.ModelData.Industry_Number = $scope.selectedUniqueNumberList[0].UniqueNumber;
                break;
            case 'Bureau Number': $scope.ModelData.Bureau_Number = $scope.selectedUniqueNumberList[0].UniqueNumber;
                break;
            case 'ID No': $scope.ModelData.ID_No = $scope.selectedUniqueNumberList[0].UniqueNumber;
                break;
            case 'Passport Number': $scope.ModelData.Passport = $scope.selectedUniqueNumberList[0].UniqueNumber;
                break;
            case 'Foreign ID': $scope.ModelData.Foreign_ID = $scope.selectedUniqueNumberList[0].UniqueNumber;
                break;
            default: 
                break;


        }
        //$('#myModal').modal('hide');


    }
    $scope.changeOccupation = function (val) {
        if (val) {
            $scope.filteredOccupationList = $scope.OccupationsList.filter(x => x.toUpperCase().includes(val.toUpperCase()));

        } else {
            $scope.filteredOccupationList = [];
        }
        
    }
    $scope.addOccupation = function (val) {
        $scope.selectedOccupation = val;
       // $('#occupationModal').modal('hide');
    }

});