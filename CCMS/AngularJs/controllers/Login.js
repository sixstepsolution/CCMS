ccmsApp.controller('LoginCntrl', function ($scope, LoginService) {
    // Validate Personal Form
    $scope.Is_Login_FormValid = false;
    $scope.Submitted = false;
    $scope.$watch('LoginForm.$valid', function (newValue) {
       // alert(newValue);
        $scope.Is_Login_FormValid = newValue;
    });

    $scope.loginModel = {};
   
   
    $scope.Login = function (loginModel) {
        console.log(loginModel)
        $scope.Submitted = true;
        if ($scope.Is_Login_FormValid) {
            $scope.isLoginLoding = true;
            LoginService.Login(loginModel).then(function (res) {

                if (res.data.success === true) {                     
                    //$scope.isLoginLoding = false;
                    window.location.href = '../Home/Dashboard';
                }
                else {
                    toastr["warning"]("Invalid username and password!");
                    $scope.isLoginLoding = false;
                }
            }).catch(function (response) {
                console.log(response);
                toastr["error"]('An Error Occured');
                $scope.isLoginLoding = false;
            });
        }
    }

});