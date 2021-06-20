// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps
function serviceProviderMap() {
    var map = L.map('mapServiceProvidr', {
        fullscreenControl: true,
        center: [-28.4793, 24.6727],
        minZoom: 2,
        zoom: 5,
    })
    setTimeout(() => { map.invalidateSize(true) }, 500);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c'],
    }).addTo(map)

    var myURL = jQuery('script[src$="leaf-T804.js"]')
        .attr('src')
        .replace('leaf-T804.js', '')

    var myIcon = L.icon({
        iconUrl: myURL + 'images/pin24.png',
        iconRetinaUrl: myURL + 'images/pin48.png',
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


                    var m = L.marker([res.result[i].Lodgement_Latitude, res.result[i].Longitude], { icon: myIcon }).bindPopup(popup);

                    markerClusters.addLayer(m);
                }
            }

        }
    });
    map.addLayer(markerClusters);
}

serviceProviderMap();