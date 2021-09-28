ccmsApp.controller('MapCntrl', function ($scope) {

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
    $scope.ParentMethod = function (val) {
        // alert(val)

        $scope.isUser = val;

    };
    $scope.showMapByType = function (type) {
        $scope.selectedType = type;
        $scope.populationMap(type);
    }

    var map = L.map('map', {
        fullscreenControl: true,
        center: [-28.4793, 24.6727],
        minZoom: 2,
        zoom: 5,
    })
    setTimeout(() => { map.invalidateSize(true) }, 500);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">2021</a>',
        subdomains: ['a', 'b', 'c'],
    }).addTo(map);
    var markers = new L.FeatureGroup();
    //var circle = L.circle([-28.4793, 24.6727], 10000).addTo(map);
    var markerClusters = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            var childCount = cluster.getChildCount();
            var c = ' marker-cluster-';
            if (childCount < 10) {
                c += 'small';
            }
            else if (childCount < 100) {
                c += 'medium';
            }
            else {
                c += 'large';
            }

            return new L.DivIcon({
                html: '<div><span>' + childCount + '</span></div>',
                className: 'marker-cluster' + c, iconSize: new L.Point(40, 40)
            });
        }
    })



    $scope.serviceProviderMap = function () {
        $.ajax({
            url: '/Home/GetTrusted804Data',
            type: "post",
            datatype: "json",
            data: { searchKey: "" },
            success: function (res) {
                console.log(res)
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
                            iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                            iconRetinaUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                            iconSize: [29, 24],
                            iconAnchor: [9, 21],
                            popupAnchor: [0, -14],
                        })
                        var myIcon1 = L.icon({
                            iconUrl:  'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                            iconRetinaUrl:'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                            iconSize: [29, 24],
                            iconAnchor: [9, 21],
                            popupAnchor: [0, -14],
                        })

                        var m = L.marker([res.result[i].Lodgement_Latitude, res.result[i].Longitude], { icon: res.result[i].Site_Type === 'Lodgement Site' ? myIcon : myIcon1}).bindPopup(popup);


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
            $scope.claimantPopulationMap();
        }
    }
    $scope.populationMap('all');


});