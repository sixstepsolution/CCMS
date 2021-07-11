ccmsApp.service('MasterService', function ($http) {
    // get dashboard information by  Service
    this.GetIndustries = function () {
        var res = $http.get('../Home/GetIndustries');
        return res;
    };

    this.GetBureaus = function () {
        var res = $http.get('../Home/GetBureaus');
        return res;
    };

    this.GetPassports = function () {
        var res = $http.get('../Home/GetPassports');
        return res;
    };

    this.GetIdentityNumbers = function () {
        var res = $http.get('../Home/GetIdentityNumbers');
        return res;
    };

    this.GetForeignIdentityNumbers = function () {
        var res = $http.get('../Home/GetForeignIdentityNumbers');
        return res;
    };

});