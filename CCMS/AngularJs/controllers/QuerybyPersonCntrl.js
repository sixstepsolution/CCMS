ccmsApp.controller('QuerybyPersonCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.IsShowSearchdata = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.isTimeline = false;
    $scope.urlParams = new URLSearchParams(window.location.search);
    $scope.myParam = $scope.urlParams.get('timeline');

    $scope.SearchbyPerson = function () {
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowPersonDetails1 = function () {
        $scope.ShowPersonDetails = true;
        $scope.IsShowSearchdata = false;
        $scope.isTimeline = true;
        $scope.$parent.ParentMethod(true);

    }

    $scope.BacltoList = function () {
        $scope.ShowPersonDetails = false;
        $scope.IsShowSearchdata = false;
        $scope.isTimeline = false;
        $scope.$parent.ParentMethod(false);

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
    if ($scope.myParam) {

        $scope.ShowPersonDetails1();
        $('#custom-tabs-three-Summary-tab').removeClass("active");
        $('#custom-tabs-three-Summary').removeClass("show active");
        $('#custom-tabs-three-timeline-tab').addClass("active");
        $('#custom-tabs-three-timeline').addClass("show active");
        
    }
    $scope.LodgementBooking = function () {
        window.location.href = '../Home/AddLodgementBooking?timeline=true'
       // $scope.$parent.ShowNewPersonDetails();

    }
    
});