ccmsApp.controller('LoginCntrl', function ($scope, LoginService) {
    // Validate Personal Form
    $scope.Is_Login_FormValid = false;
    $scope.Submitted = false;
    $scope.$watch('LoginForm.$valid', function (newValue) {
       // alert(newValue);
        $scope.Is_Login_FormValid = newValue;
    });

    $scope.loginModel = {};
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
   
    $scope.Login = function (loginModel) {
        console.log(loginModel)
        $scope.Submitted = true;
        if ($scope.Is_Login_FormValid) {
            $scope.isLoginLoding = true;
            LoginService.Login(loginModel).then(function (res) {

                if (res.data.success === true) {                     
                    $scope.isLoginLoding = false;
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