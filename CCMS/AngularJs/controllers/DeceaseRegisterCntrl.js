ccmsApp.controller('DeceaseRegisterCntrl', function ($scope, $timeout, MasterService, ReceiveInbondService) {
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.showNewCall = false;
    $scope.IsBack = false;
    $scope.IsData = false;
    $scope.IsSaving = false;
    $scope.isCreate = false;
    $scope.showDocument = function () {
       // alert()
        //$scope.ShowIframe = false;
        $timeout(function () {
            $scope.ShowIframe = true;
        }, 1000);
    }
   // $scope.ShowMiner();
    $scope.ReceiveInbondCallList = [];
    $scope.minerDynamicList = [];
    $scope.MinerModel = {};
    $scope.MinimumMetrofileDocuments = [
        {
            ID: 1,
            Document: 'Autopsy Report'
        },
        {
            ID: 1,
            Document: 'Death Certificate'
        }
    ];

    $scope.OtherDocuments = [{ ID: "0: ADOPTION_PROOF", Document: "Adoption Proof" },
    { ID: "1: AUTH_D_MED", Document: "All available medical records, including post mortem report" },
    { ID: "2: ATTORNEY_DOCS", Document: "Attorney Documentation" },
    { ID: "3: AUTOPSY_REP", Document: "Autopsy Report" },
    { ID: "4: BANK_STMT", Document: "Bank statement" },
    { ID: "5: BME_PAGES", Document: "BME Examination form" },
    { ID: "6: BME_CONSENT", Document: "BME Medical Consent Form" },
    { ID: "7: ID_PHOTO", Document: "Camera Photo of applicant Face" },
    { ID: "8: CCOD_PACK_SCAN", Document: "CCOD Payment pack" },
    { ID: "9: BIRTH_CERT", Document: "Certificate of Birth" },
    { ID: "10: PP_PHOTO", Document: "Certified copy of ID/Passport document " },
    { ID: "11: CLINICAL_NOTES", Document: "Clinical Notes" },
    { ID: "12: AUTH_D_OTHERDEP", Document: "Copies of other dependant's Passport or National Identification Documents" },
    { ID: "13: COVID_SCREENING", Document: "Covid Screening Form" },
    { ID: "14: DEATH_CERT", Document: "Death Certificate" },
    { ID: "15: DEP_PP_PHOTO", Document: "Dependant Certified copy of ID/Passport document" },
    { ID: "16: CHILD_BIRTH_CERT", Document: "Dependant Child Certificate of Birth" },
    { ID: "17: DEP_BANK_STMT", Document: "Dependant Original Bank Statement" },
    { ID: "18: DEP_MARAIGE_CERT", Document: "Dependant Spouse's Marriage Certificate" },
    { ID: "19: AUTH_D_DEPID", Document: "Dependant's original and valid Passport or National Identification Document" },
    { ID: "20: FLAG_UPDATE", Document: "Document proof for flag update" },
    { ID: "21: AUTH_ROS", Document: "Employment records (TEBA or Gold mines)" },
    { ID: "22: AUTH_TEBA", Document: "Evidence of Industry Number (TEBA/Industry card, TEBA service record)" },
    { ID: "23: EXEC_BANK_STMT", Document: "Executor Bank statement" },
    { ID: "24: EXEC_PP_PHOTO", Document: "Executor Certified copy of ID/Passport document " },
    { ID: "25: EXIT_CERT", Document: "Exit Certificate" },
    { ID: "26: GW2417", Document: "Form GW24/17" },
    { ID: "27: GW2480", Document: "Form GW24/80" },
    { ID: "28: V12", Document: "Form V12/V13" },
    { ID: "29: HCOURT_CURATOR_DOC", Document: "High Court Appointment of Curatorship" },
    { ID: "30: HCOURT_GUARDIAN_DOC", Document: "High Court Appointment of Guardianship" },
    { ID: "31: HCOURT_LEGAL_DOC", Document: "High Court Order Legal Document" },
    { ID: "32: HIST_CERT", Document: "Historic Certification" },
    { ID: "33: INDUSTRY_CARD", Document: "Industry card" },
    { ID: "34: APPOINT_LETTER", Document: "Letter of appointment of Executor/Gaurdian" },
    { ID: "35: EXEC_LETTER", Document: "Letter of Executorship" },
    { ID: "36: LUNG_F_COVID", Document: "Lung function COVID19 Waiver" },
    { ID: "37: LUNG_F", Document: "Lung function report" },
    { ID: "38: MARAIGE_CERT", Document: "Marriage Certificate" },
    { ID: "39: MBOD_CERT", Document: "MBOD Certification" },
    { ID: "40: MBOD_DLETTER", Document: "MBOD D-Letter" },
    { ID: "41: MBOD_PLETTER", Document: "MBOD P-Letter" },
    { ID: "42: RELEASE_MBOD", Document: "MBOD Release Form" },
    { ID: "43: AUTH_L_MED", Document: "Medical records which indicate that you have silicosis or work-related TB" },
    { ID: "44: SURV", Document: "Medical survey and questionare" },
    { ID: "45: MINE_WORK_PROOF", Document: "Mine worker proof" },
    { ID: "46: AUTH_L_ID", Document: "Mine worker's original and valid Passport or National Identification Document" },
    { ID: "47: AUTH_D_ID", Document: "Mine worker's Passport or National Identification Document: Original or copy" },
    { ID: "48: MINER_DEATH_CERT", Document: "Miner's original official death certificate or certified copy" },
    { ID: "49: MINER_PP_PHOTO", Document: "Miner's original or certified copy of ID/Passport" },
    { ID: "50: NIOH_BME", Document: "NIOH BME Form" },
    { ID: "51: NIOH_CONS", Document: "NIOH Post Mortem Consent" },
    { ID: "52: NOTICE", Document: "Notice" },
    { ID: "53: ODMWA", Document: "ODMWA Certificate" },
    { ID: "54: OTH", Document: "Other documentation" },
    { ID: "55: ROS_PROOF", Document: "Other Service record Docs." },
    { ID: "56: PATH_REP", Document: "Pathology Report" },
    { ID: "57: PAY_CERT", Document: "Payment certificate" },
    { ID: "58: PAYMENT_RECEIPT", Document: "Payment Receipt" },
    { ID: "59: AGENDA_SCAN", Document: "Pdf scan of Certification agenda" },
    { ID: "60: PACK_FILE", Document: "Pdf scan of Pack" },
    { ID: "61: POA_BANK", Document: "Power of Attorney for Bank account" },
    { ID: "62: COHABIT_PROOF", Document: "Proof of Cohabitation" },
    { ID: "63: AUTH_D_DEPREL", Document: "Proof of dependant's relationship to the deceased" },
    { ID: "64: PAYMENT_FAILED_PROOF", Document: "Proof of failed payment" },
    { ID: "65: FIN_LITERACY_PROOF", Document: "Proof of Financial Literacy" },
    { ID: "66: PROOF_GUARDIAN", Document: "Proof of guardianship for minor dependants" },
    { ID: "67: PAYMENT_PROOF", Document: "Proof of payment" },
    { ID: "68: RADIOLOGY_REP", Document: "Radiology rep." },
    { ID: "69: METROFILE_SCAN", Document: "Scan of metrofile document" },
    { ID: "70: DATA_FILE", Document: "Source data file" },
    { ID: "71: SPUTUM_REPORT", Document: "Sputum Report" },
    { ID: "72: TAX_DIRECTIVE", Document: "Tax Directive" },
    { ID: "73: TBRESULT", Document: "TB Result" },
    { ID: "74: TB_TREATMENT", Document: "TB Treatment certificate" },
    { ID: "75: TEBA_ROS_PDF", Document: "Teba Record of service, ONLINE" },
    { ID: "76: ROS_PDF", Document: "Teba Record of service, PDF SCAN" },
    { ID: "77: RELEASE_TRUST", Document: "Trust Release Form" },
    { ID: "78: UNABR_BCERT", Document: "Unabridged Birth Certificate" },
    { ID: "79: UNABR_BCERT_PARENT", Document: "Unabridged Birth Certificates of Parent and Parent's Sibling" },
    { ID: "80: upLoadFile2", Document: "unknown" },
    { ID: "81: V47", Document: "V47 Bank doc" },
    { ID: "82: DICOM", Document: "XRay in dicom" },
    { ID: "83: XRAY_JPG", Document: "XRay jpeg image" }];

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


    //$scope.SearchDetailsPerson = function () {
    //    $scope.ShowPersonDetails = true;
    //    $scope.IsShowSearchdata = false;
    //    $scope.showReceiveInbondCall = false;
    //    $scope.showQuestionnaire = false;
    //    $scope.showMinorDetails = false;
    //    $scope.showNewCall = false;
    //    $scope.IsBack = true;
    //    $scope.IsData = true;

    //}

    $scope.NewDieceasedPerson = function () {
        $scope.isCreate = true;
        $scope.DeceasedType = 'Create';
        $scope.showNewCall = true;
        $scope.ShowPersonDetails = false;
        $scope.showQuestionnaire = false;
        $scope.showReceiveInbondCall = false;
        $scope.showMinorDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = false;
    }

    $scope.UpdateDieceasedPerson = function () {
        $scope.isCreate = true;
        $scope.DeceasedType = 'Update';

        $scope.showNewCall = true;
        $scope.ShowPersonDetails = false;
        $scope.showQuestionnaire = false;
        $scope.showReceiveInbondCall = false;
        $scope.showMinorDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.IsBack = true;
        $scope.IsData = false;
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