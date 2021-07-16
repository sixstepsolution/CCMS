var ccmsApp = angular.module('ccmsApp', ['ngRoute', 'angucomplete-alt', 'ui.bootstrap']);
//var ccmsApp = angular.module('ccmsApp', ['ngRoute', 'angucomplete-alt']);
ccmsApp.run(function ($rootScope) {
    //mainService.GetApplicationsAlertsWithCounts().then(function (result) {
    //    console.log('load appplication alerts onload');
    //    console.log(result.data);
    //    var LeftMenuAlerts = result.data;
    //    $rootScope.LeftMenuAlerts = LeftMenuAlerts;
    //    $rootScope.RootInprogress = LeftMenuAlerts[1].count;
    //    $rootScope.Rootcompleted = LeftMenuAlerts[2].count;
    //    $rootScope.RootCancelled = LeftMenuAlerts[3].count;
    //    //AuthenticationService.setApplicationCounts(result.data);

    //}, function (error) {
    //    console.log(error.status)
    //    console.log("Bad Request Process");
    //});
   
}); 

ccmsApp.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function (item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});
function GetAllFilesSizes(files) {
    var size = 0;
    for (var i = 0; i < files.length; i++) {
        size = size + files[i].size;
    }
    return size;
}

function convertDateFormat(dateFrmt) {
    if (dateFrmt == null) { return null; }
    var d = dateFrmt.replace(/[^a-zA-Z0-9]/g, '');
    var dc = d.slice(4);
    return dc;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
//ccmsApp.config(function ($httpProvider) {
//    $httpProvider.interceptors.push(AuthInterceptor);  
//}).run(function ($rootScope) {
//    $rootScope.IsAuthenticated = '';
//    //($rootScope.IsAuthenticated)
//    $rootScope.ApplicationCounts = [];
//}); 
ccmsApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);  


ccmsApp.filter('split', function () {
    return function (input, splitChar, splitIndex) {
        // do some bounds checking here to ensure it has that index
        return input.split(splitChar)[splitIndex];
    };
});

ccmsApp.filter('sumOfValue', function () {
    return function (data, key) {
        if (angular.isUndefined(data) || angular.isUndefined(key))
            return 0;
        var sum = 0;
        angular.forEach(data, function (value) {
            sum = sum + parseInt(value[key], 10);
        });
        return sum;
    }
});
ccmsApp.filter('totalSumPriceQty', function () {
    return function (data, key1, key2) {
        if (angular.isUndefined(data) || angular.isUndefined(key1) || angular.isUndefined(key2))
            return 0;
        var sum = 0;
        angular.forEach(data, function (value) {
            sum = sum + (parseInt(value[key1], 10) * parseInt(value[key2], 10));
        });
        return sum;
    }
});

ccmsApp.filter('sumOfValuebyAvg', function () {
    return function (data, key1, key2) {
        if (angular.isUndefined(data) || angular.isUndefined(key1) || angular.isUndefined(key2))
            return 0;
        var sum = 0;
        angular.forEach(data, function (value) {
            sum = sum + parseInt(value[key1], 10);
        });
        var divideval = 0;
        angular.forEach(data, function (value) {
            divideval = divideval + parseInt(value[key2], 10);
        });
        return Math.round(sum / divideval) + 10;
    }
});
ccmsApp.directive("datepicker", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'yy-mm-dd',
            });
        }
    };
});
ccmsApp.directive("datepicker1", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'yy-mm-dd',
                //minDate: 0,
                maxDate: 0,
                changeMonth: true,
                changeYear: true

            });
        }
    };
});
ccmsApp.directive("datepicker2", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'yy-mm-dd',
                minDate: 0
            });
        }
    };
});
ccmsApp.directive("datepicker3", function () {
    //alert('ok');
    return {
        restrict: "A",
        link: function (scope, el, attr) {
            el.datepicker({
                dateFormat: 'yy-mm-dd',
                maxDate: 0
            });
        }
    };
});

ccmsApp.directive('validNumber', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            element.on('keydown', function (event) {
                var keyCode = []
                if (attrs.allowNegative == "true") {
                    keyCode = [8, 9, 36, 35, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 109, 110, 173, 190, 189];
                }
                else {
                    keyCode = [8, 9, 36, 35, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 110, 173, 190];
                }


                if (attrs.allowDecimal == "false") {

                    var index = keyCode.indexOf(190);


                    if (index > -1) {
                        keyCode.splice(index, 1);
                    }

                }

                if ($.inArray(event.which, keyCode) == -1) event.preventDefault();
                else {
                    //console.log(2);
                    var oVal = ngModelCtrl.$modelValue || '';
                    if ($.inArray(event.which, [109, 173]) > -1 && oVal.indexOf('-') > -1) event.preventDefault();
                    else if ($.inArray(event.which, [110, 190]) > -1 && oVal.indexOf('.') > -1) event.preventDefault();
                }
            })
                .on('blur', function () {

                    if (element.val() == '' || element.val() == '-') {

                        ngModelCtrl.$setViewValue('');

                    }
                    else if (parseFloat(element.val()) == 0.0) {

                        if (attrs.allowZero && attrs.allowZero == 'true') {

                            if (attrs.decimalUpto) {
                                ngModelCtrl.$setViewValue(parseFloat(0).toFixed(attrs.decimalUpto).toString());
                            }
                            else {
                                ngModelCtrl.$setViewValue('0.00');
                            }
                        }
                        else ngModelCtrl.$setViewValue('');

                    }
                    else if (attrs.allowDecimal == "false") {

                        ngModelCtrl.$setViewValue(element.val());

                    }
                    else if (parseFloat(element.val()) < parseFloat(attrs.minVal) || parseFloat(element.val()) > parseFloat(attrs.maxVal)) {

                        ngModelCtrl.$setViewValue('');

                    }
                    else {
                        if (attrs.decimalUpto) {
                            var fixedValue = parseFloat(element.val()).toFixed(attrs.decimalUpto);
                        }
                        else {
                            var fixedValue = parseFloat(element.val()).toFixed(2);
                        }
                        ngModelCtrl.$setViewValue(fixedValue);
                    }

                    ngModelCtrl.$render();
                    scope.$apply();
                })
                .on('keyup', function () {

                    if (parseFloat(attrs.minVal) < 9 && (parseFloat(element.val()) < parseFloat(attrs.minVal) || parseFloat(element.val()) > parseFloat(attrs.maxVal))) {

                        ngModelCtrl.$setViewValue('');

                    }

                    ngModelCtrl.$render();
                    scope.$apply();
                });

            ngModelCtrl.$parsers.push(function (text) {
                var oVal = ngModelCtrl.$modelValue;
                var nVal = ngModelCtrl.$viewValue;
                //console.log(nVal);
                if (parseFloat(nVal) != nVal) {

                    if (nVal === null || nVal === undefined || nVal == '' || nVal == '-') oVal = nVal;

                    ngModelCtrl.$setViewValue(oVal);
                    ngModelCtrl.$render();
                    return oVal;
                }
                else {
                    var decimalCheck = nVal.split('.');
                    if (!angular.isUndefined(decimalCheck[1])) {
                        if (attrs.decimalUpto)
                            decimalCheck[1] = decimalCheck[1].slice(0, attrs.decimalUpto);
                        else
                            decimalCheck[1] = decimalCheck[1].slice(0, 2);
                        nVal = decimalCheck[0] + '.' + decimalCheck[1];
                    }

                    ngModelCtrl.$setViewValue(nVal);
                    ngModelCtrl.$render();
                    return nVal;
                }
            });

            ngModelCtrl.$formatters.push(function (text) {
                if (text == '0' || text == null && attrs.allowDecimal == "false") return '';
                else if (text == '0' || text == null && attrs.allowDecimal != "false" && attrs.decimalUpto == undefined) return '';
                else if (text == '0' || text == null && attrs.allowDecimal != "false" && attrs.decimalUpto != undefined) return parseFloat(0).toFixed(attrs.decimalUpto);
                else if (attrs.allowDecimal != "false" && attrs.decimalUpto != undefined) return parseFloat(text).toFixed(attrs.decimalUpto);
                else return parseFloat(text).toFixed(2);
            });
        }
    };
});
ccmsApp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return "";
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ccmsApp.directive('stringOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^a-zA-Z]/g, ''); //stringOnly

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return "";
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ccmsApp.directive('allowDecimalNumbers', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                var $input = $(this);
                var value = $input.val();
                value = value.replace(/[^0-9\.]/g, '')
                var findsDot = new RegExp(/\./g)
                var containsDot = value.match(findsDot)
                if (containsDot != null && ([46, 110, 190].indexOf(event.which) > -1)) {
                    event.preventDefault();
                    return false;
                }
                $input.val(value);
                if (event.shiftKey && ([48, 49, 50, 51, 52, 53, 54, 55, 56, 57,58, 59, 60,61,62,63,64].indexOf(event.which) > -1)) {
                    event.preventDefault();
                }
                //if (containsDot != null && ([163].indexOf(event.which) > -1)) {
                //    event.preventDefault();
                //    return false;
                //}
                
                //if (containsDot != null && event.which >= 32 && event.which <= 45) {
                //    // Special characters  
                //    return false;
                //}
                if (event.which == 64 || event.which == 16) {
                    // numbers  
                    return false;
                } if ([8, 13, 27, 37, 38, 39, 40, 110].indexOf(event.which) > -1) {
                    // backspace, enter, escape, arrows  
                    return true;
                } else if (event.which >= 48 && event.which <= 57) {
                    // numbers  
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // numpad number  
                    return true;
                } else if ([46, 110, 190].indexOf(event.which) > -1) {
                    // dot and numpad dot  
                    return true;
                } else {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});

ccmsApp.directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function (modelValue) {
                return modelValue === scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
});


