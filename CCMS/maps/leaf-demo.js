// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps
function populationMap() {
    var map = L.map('map', {
        fullscreenControl: true,
        center: [-28.4793, 24.6727],
        minZoom: 2,
        zoom: 5,
    })
    setTimeout(() => { map.invalidateSize(true) }, 500);
    L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">2021</a>',
        subdomains: ['a', 'b', 'c'],
    }).addTo(map)
    var myURL = jQuery('script[src$="leaf-demo.js"]')
        .attr('src')
        .replace('leaf-demo.js', '')

    var myIcon = L.icon({
        iconUrl: myURL + 'images/placeholder.png',
        iconRetinaUrl: myURL + 'images/placeholder.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14],
    })

    var markerClusters = L.markerClusterGroup()

    //for (var i = 0; i < markers.length; ++i) {
    //  var popup =
    //    markers[i].name +
    //    '<br/>' +
    //    markers[i].city +
    //    '<br/><b>IATA/FAA:</b> ' +
    //    markers[i].iata_faa +
    //    '<br/><b>ICAO:</b> ' +
    //    markers[i].icao +
    //    '<br/><b>Altitude:</b> ' +
    //    Math.round(markers[i].alt * 0.3048) +
    //    ' m' +
    //    '<br/><b>Timezone:</b> ' +
    //    markers[i].tz

    //  var m = L.marker([markers[i].lat, markers[i].lng], {
    //    icon: myIcon,
    //  }).bindPopup(popup)

    //  markerClusters.addLayer(m)
    //}

    //map.addLayer(markerClusters)



    $.ajax({
        url: '/Home/GetTrusted804Data',
        type: "post",
        datatype: "json",
        data: { searchKey: "" },
        success: function (res) {
            console.log(res)
            /*..................Display Doctor Info.........................*/
            if (res.success === true) {
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
                        iconUrl: res.result[i].Site_Type === 'Lodgement Site' ? myURL + 'images/Google-Maps.png' : myURL + 'images/plus_red_marker.png',
                        iconRetinaUrl: res.result[i].Site_Type === 'Lodgement Site' ? myURL + 'images/Google-Maps.png' : myURL + 'images/plus_red_marker.png',
                        iconSize: [29, 24],
                        iconAnchor: [9, 21],
                        popupAnchor: [0, -14],
                    })

                    var m = L.marker([res.result[i].Lodgement_Latitude, res.result[i].Longitude], { icon: myIcon }).bindPopup(popup);

                    //markerClusters.addLayer(m);
                    map.addLayer(m);

                }
            }

        }
    });

    map.addLayer(markerClusters);
    $.ajax({
        url: '/Home/GetTrustedData',
        type: "post",
        datatype: "json",
        data: { searchKey: "" },
        success: function (res) {
            console.log(res)
            /*..................Display Doctor Info.........................*/
            if (res.success === true) {
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


  
}

populationMap();