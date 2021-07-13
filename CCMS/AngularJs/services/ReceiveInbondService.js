ccmsApp.service('ReceiveInbondService', function ($http) {
    // get dashboard information by  Service
    this.SaveReceiveInBondCall = function (modal) {
        var res = $http.post('../Home/SaveReceiveInBondCall', modal);
        return res;
    };
               // get dashboard information by  Service
    this.GetReceiveInbondingCall = function (inputs) {
        var res = $http.post('../Home/GetReceiveInbondingCall', inputs);
        return res;
    };

});