ccmsApp.service('LoginService', function ($http) {
    // get dashboard information by  Service
    this.Login = function (user) {
        var res = $http.post('../Home/UserLogin', user);
        return res;
    };

});