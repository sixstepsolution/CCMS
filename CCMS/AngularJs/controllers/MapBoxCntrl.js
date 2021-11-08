ccmsApp.controller('MapBoxCntrl', function ($scope, $http) {
    $scope.ClaimantPopulationCount = 0;
    $scope.LodgementCount = 0;
    $scope.BmisitesCount = 0;
    $scope.map_types = [{
        id: 1,
        type: 'Claimant Population'
    }, {
        id: 2,
        type: 'Service Provider Sites'
    },
    {
        id: 3,
        type: 'All'
    }
    ];
    $scope.isUser = false;
    $scope.selectedType = "All";
    $scope.claimantCount = 0;
    $scope.serviceProviderCount = 0;

    L.mapbox.accessToken = 'pk.eyJ1Ijoia2lyYW41MzQiLCJhIjoiY2tweHZsaDhkMDl4OTJ0cWM3czBvM2ZzbyJ9.5BIy7n9b9GUg1hOWjQgFdg';
    var map = L.mapbox.map('map')
        .setView([-28.4793, 24.6727], 6)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/kiran534/ckuf6pit51wsh18k6pfbgz4z5'));
    // Add zoom and rotation controls to the map.
    //map.addControl(new L.mapbox.NavigationControl());

    var markers = new L.FeatureGroup();
    var markerClusters = new L.MarkerClusterGroup();

    //getting Claimant Population Count
    $http.get('../Home/GetTrustedDataCount')
        .then(function (response) {

            console.log("trustDataCount", response.data)
            if (response.data.success === true)
                $scope.ClaimantPopulationCount = response.data.result;
            else
                $scope.ClaimantPopulationCount = 0
        }).catch(function (response) {
            console.error('Error occurred:', response.status, response.data);
        }).finally(function () {
            console.log("Task Finished.");
        });


   

    $scope.serviceProviderMap = function () {
        $.ajax({
            url: '/Home/GetTrusted804Data',
            type: "post",
            datatype: "json",
            data: { searchKey: "" },
            success: function (res) {
                console.log(res);
                $scope.serviceProviderList = res.result;
                $scope.LodgementCount = $scope.serviceProviderList.filter(function (val) {
                    return val.Site_Type === 'Lodgement Site';
                }).length;

                $scope.BmisitesCount = $scope.serviceProviderList.filter(function (val) {
                    return val.Site_Type === 'BME Site';
                }).length;

                /*..................Display Doctor Info.........................*/
                if (res.success === true) {
                    $scope.serviceProviderCount = res.result.length;
                    for (i = 0; i < res.result.length; i++) {

                        var popup =
                            '<br/> <b>Lodgement Site:</b> ' +
                            res.result[i].Lodgement_Site +
                            '<br/> <b>City:</b> ' +
                            res.result[i].City +
                            '<br/><b>Province:</b> ' +
                            res.result[i].Province +
                            '<br/><b>Country:</b> ' +
                            res.result[i].Country +
                            '<br/><b>Site_Type:</b> ' +
                            res.result[i].Site_Type +
                            '<br/><b>LATITUDE:</b> ' +
                            res.result[i].Lodgement_Latitude +
                            '<br/><b>LONGITUDE:</b> ' +
                            res.result[i].Longitude

                        var myIcon = L.icon({
                            iconUrl: '../maps/images/lightblue-dot.png',
                            iconRetinaUrl: '../maps/images/lightblue-dot.png',
                            iconSize: [29, 24],
                            iconAnchor: [9, 21],
                            popupAnchor: [0, -14],
                        })
                        var myIcon1 = L.icon({
                            iconUrl: '../maps/images/purple-dot.png',
                            iconRetinaUrl: '../maps/images/purple-dot.png',
                            iconSize: [29, 24],
                            iconAnchor: [9, 21],
                            popupAnchor: [0, -14],
                        })

                        var m = L.marker([res.result[i].Lodgement_Latitude, res.result[i].Longitude], { icon: res.result[i].Site_Type === 'Lodgement Site' ? myIcon : myIcon1 }).bindPopup(popup);


                        //markerClusters.addLayer(m);
                        markers.addLayer(m);


                    }
                    map.addLayer(markers);
                }

            }
        });
    }
    $scope.claimantPopulationMap = function () {

        $.ajax({
            url: '/Home/GetTrustedData',
            type: "post",
            datatype: "json",
            data: { searchKey: "" },
            success: function (res) {
                var myIcon = L.icon({
                    iconUrl: '../maps/images/placeholder.png',
                    iconRetinaUrl: '../maps/images/placeholder.png',
                    iconSize: [29, 24],
                    iconAnchor: [9, 21],
                    popupAnchor: [0, -14],
                })
                console.log(res)
                /*..................Display Doctor Info.........................*/
                if (res.success === true) {
                    $scope.claimantCount = res.result.length;
                    for (i = 0; i < res.result.length; i++) {
                        var popup =
                            '<br/> <b>SRC ADDRESS TYPE:</b> ' +
                            res.result[i].SRC_ADDRESS_TYPE +
                            '<br/> <b>SELECTED COUNTRY:</b> ' +
                            res.result[i].SELECTED_COUNTRY +
                            '<br/><b>SOURCE LINE:</b> ' +
                            res.result[i].SOURCE_LINE +
                            '<br/><b>TOWN NAME:</b> ' +
                            res.result[i].TOWN_NAME +
                            '<br/><b>MUNICIPALITY NAME:</b> ' +
                            res.result[i].MUNICIPALITY_NAME +
                            '<br/><b>LATITUDE:</b> ' +
                            res.result[i].LATITUDE +
                            '<br/><b>LONGITUDE:</b> ' +
                            res.result[i].LONGITUDE


                        var m = L.marker([res.result[i].LATITUDE, res.result[i].LONGITUDE], { icon: myIcon }).bindPopup(popup);


                        markerClusters.addLayer(m);
                        //map.addLayer(m);
                    }
                }

            }
        });

        map.addLayer(markerClusters);

    }
    $scope.populationMap = function (type) {

        if (type === 'Service Provider Sites') {
            markerClusters.clearLayers();
            $scope.serviceProviderMap();
        } else if (type === 'Claimant Population') {
            // remove all the markers in one go
            markers.clearLayers();
            $scope.claimantPopulationMap();
        } else {
            $scope.serviceProviderMap();
            //$scope.claimantPopulationMap();
        }
    }
    $scope.populationMap('all');
    //for (var i = 0; i < addressPoints.length; i++) {
    //    var a = addressPoints[i];
    //    var title = a[2];
    //    var marker = L.marker(new L.LatLng(a[0], a[1]), {
    //        icon: L.mapbox.marker.icon({ 'marker-symbol': 'post', 'marker-color': '0044FF' }),
    //        title: title
    //    });
    //    marker.bindPopup(title);
    //    markers.addLayer(marker);
    //}

    //map.addLayer(markers);

    //function onmove() {
    //    // Get the map bounds - the top-left and bottom-right locations.
    //    var inBounds = [],
    //        bounds = map.getBounds();
    //    markers.eachLayer(function (marker) {
    //        // For each marker, consider whether it is currently visible by comparing
    //        // with the current map bounds.
    //        if (bounds.contains(marker.getLatLng())) {
    //            inBounds.push(marker.options.title);
    //        }
    //    });
    //    // Display a list of markers.
    //    //document.getElementById('coordinates').innerHTML = inBounds.join('\n');
    //}

    //map.on('move', onmove);

    //// call onmove off the bat so that the list is populated.
    //// otherwise, there will be no markers listed until the map is moved.
    //onmove();
});