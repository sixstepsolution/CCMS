ccmsApp.controller('PrepareClaimCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.ShowClaimantReviewDocuments = false;
    $scope.ShowSearchDetails = true;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.ShowReview = false;
    $scope.SearchbyPerson = function () {
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowPersonDetails1 = function () {
        $scope.ShowPersonDetails = true;
        $scope.ShowSearchDetails = false;
        $scope.ShowClaimantReviewDocuments = false;
        $scope.IsShowSearchdata = false;
        $timeout(function () {
            $scope.ShowIframe = false;
        }, 2000);
    } 

    $scope.BacktoList = function () {
        $scope.ShowSearchDetails = true;
        $scope.ShowClaimantReviewDocuments = false;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $timeout(function () {
            $scope.ShowIframe = false;
        }, 2000);
    }
    $scope.BackToReviewList = function () {
        $timeout(function () {
            $scope.ShowIframe = false;
        }, 2000);
        $scope.ShowReview = false;
        $scope.ShowSearchDetails = false;
        $scope.ShowClaimantReviewDocuments = true;
        $scope.ShowPersonDetails = false;
        
    }
    $scope.showDocument = function () {
        //$scope.ShowIframe = false;
        $scope.ShowReview = true;
        $timeout(function () {
            $scope.ShowIframe = true;
        }, 2000);
    }
    $scope.changeIDType = function (id_type) {
        $scope.IdNumber = id_type;
    }
    $scope.ShowClaimantReview = function () {
        $scope.ShowClaimantReviewDocuments = true;
        $scope.ShowSearchDetails = false;
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
    }

    $scope.ViewClaimantImages = function () {
        $("#ClaimantImageModal").model('show');
    }

});