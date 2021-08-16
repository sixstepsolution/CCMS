ccmsApp.controller('homeCntrl', function ($scope) {
   // alert($rootScope.isUSer);

    $scope.isUser = false;
    //alert(UserService.isUser)

    $scope.ParentMethod = function (val) {
       // alert(val)
        
        $scope.isUser = val;

    };

});