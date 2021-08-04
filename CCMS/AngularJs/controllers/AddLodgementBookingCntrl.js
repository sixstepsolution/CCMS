ccmsApp.controller('AddLodgementBookingCntrl', function ($scope, $timeout) {
    $scope.IsShowSearchdata = false;
    $scope.ShowSearchDetails = true;
    $scope.SearchLoader = false;
    $scope.ShowPersonDetails = true;
    $scope.ShowInboxList = true;
    $scope.ShowPersonDetailsNew = false;
    $scope.ShowResolveCallcentreDetails = false;
    $scope.pdfModel = "";
    $scope.ShowIframe = false;
    $scope.SearchbyPerson = function () {
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowPersonDetails1 = function () {
        $scope.ShowPersonDetails = false;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = true;
        $scope.IsShowSearchdata = true;
    }

    $scope.ShowNewPersonDetails = function () {
        //$("#calendar").fullCalendar('render');

        $scope.ShowSearchDetails = false;
        //calendar.render();
        $scope.ShowPersonDetails = false;
        $scope.ShowPersonDetailsNew = true;
        $scope.ShowResolveCallcentreDetails = false;
        $scope.IsShowSearchdata = false;

        //$scope.LoadCalenderEvents();

    }

    $scope.BacktoSearch = function () {

        $scope.IsShowSearchdata = false;
        $scope.ShowPersonDetails = true;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = false;
    }

    $scope.BacktoList = function () {
        $scope.IsShowSearchdata = false;
        $scope.ShowSearchDetails = true;
        $scope.ShowPersonDetails = false;
        $scope.ShowPersonDetailsNew = false;
        $scope.ShowResolveCallcentreDetails = false;
    }
    $scope.showDocument = function () {
        //$scope.ShowIframe = false;
        $timeout(function () {
            $scope.ShowIframe = true;
        }, 2000);
    }
    $scope.changeIDType = function (id_type) {
        $scope.IdNumber = id_type;
    }

    $scope.LoadCalenderEventsNew = function () {
        $scope.SearchLoader = true;
        $timeout(function () {
            $scope.LoadCalenderEvents();
        }, 2000);
    }

    $scope.LoadCalenderEvents = function () {
        $scope.SearchLoader = false;
        $(function () {
            //alert();
            //$.noConflict();
            /* initialize the external events
             -----------------------------------------------------------------*/
            function ini_events(ele) {
                ele.each(function () {

                    // create an Event Object (https://fullcalendar.io/docs/event-object)
                    // it doesn't need to have a start or end
                    var eventObject = {
                        title: $.trim($(this).text()) // use the element's text as the event title
                    }

                    // store the Event Object in the DOM element so we can get to it later
                    $(this).data('eventObject', eventObject)

                    // make the event draggable using jQuery UI
                    $(this).draggable({
                        zIndex: 1070,
                        revert: true, // will cause the event to go back to its
                        revertDuration: 0  //  original position after the drag
                    })

                })
            }

            //ini_events($('#external-events div.external-event'))

            /* initialize the calendar
             -----------------------------------------------------------------*/
            //Date for the calendar events (dummy data)
            var date = new Date()
            var d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear()

            var Calendar = FullCalendar.Calendar;
            var Draggable = FullCalendar.Draggable;

            //var containerEl = document.getElementById('external-events');
            //var checkbox = document.getElementById('drop-remove');
            var calendarEl = document.getElementById('calendar');

            // initialize the external events
            // -----------------------------------------------------------------

            //new Draggable(containerEl, {
            //    itemSelector: '.external-event',
            //    eventData: function (eventEl) {
            //        return {
            //            title: eventEl.innerText,
            //            backgroundColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
            //            borderColor: window.getComputedStyle(eventEl, null).getPropertyValue('background-color'),
            //            textColor: window.getComputedStyle(eventEl, null).getPropertyValue('color'),
            //        };
            //    }
            //});



            var calendar = new Calendar(calendarEl, {
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                themeSystem: 'bootstrap',
                //Random default events
                events: [
                    //{
                    //    title: 'All Day Event',
                    //    start: new Date(y, m, 1),
                    //    backgroundColor: '#f56954', //red
                    //    borderColor: '#f56954', //red
                    //    allDay: true
                    //},
                    //{
                    //    title: 'Long Event',
                    //    start: new Date(y, m, d - 5),
                    //    end: new Date(y, m, d - 2),
                    //    backgroundColor: '#f39c12', //yellow
                    //    borderColor: '#f39c12' //yellow
                    //},
                    {
                        title: 'MOAHLOLI JACOB',
                        start: new Date(y, m, d, 10, 30),
                        allDay: true,
                        backgroundColor: '#f39c12', //Blue
                        borderColor: '#f39c12' //Blue
                    },
                    {
                        title: 'THABANA ',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: true,
                        backgroundColor: '#00a65a', //Info (aqua)
                        borderColor: '#00a65a' //Info (aqua)
                    },
                    {
                        title: 'TEBA BRITS',
                        start: new Date(y, m, d, 12, 0),
                        end: new Date(y, m, d, 14, 0),
                        allDay: true,
                        backgroundColor: '#f56954', //Success (green)
                        borderColor: '#f56954' //Success (green)
                    }
                    //{
                    //    title: 'TEBA BRITS',
                    //    start: new Date(y, m, d + 1, 19, 0),
                    //    end: new Date(y, m, d + 1, 22, 30),
                    //    allDay: true,
                    //    backgroundColor: '#f56954', //Success (green)
                    //    borderColor: '#f56954' //Success (green)
                    //}
                ],
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
                drop: function (info) {
                    // is the "remove after drop" checkbox checked?
                    if (checkbox.checked) {
                        // if so, remove the element from the "Draggable Events" list
                        info.draggedEl.parentNode.removeChild(info.draggedEl);
                    }
                }
            });

            calendar.render();
            // $('#calendar').fullCalendar()

            /* ADDING EVENTS */
            //var currColor = '#3c8dbc' //Red by default
            //// Color chooser button
            //$('#color-chooser > li > a').click(function (e) {
            //    e.preventDefault()
            //    // Save color
            //    currColor = $(this).css('color')
            //    // Add color effect to button
            //    $('#add-new-event').css({
            //        'background-color': currColor,
            //        'border-color': currColor
            //    })
            //})
            $('#add-new-event').click(function (e) {
                e.preventDefault()
                // Get value and make sure it is not null
                var val = $('#new-event').val()
                if (val.length == 0) {
                    return
                }

                // Create events
                var event = $('<div />')
                event.css({
                    'background-color': currColor,
                    'border-color': currColor,
                    'color': '#fff'
                }).addClass('external-event')
                event.text(val)
                $('#external-events').prepend(event)

                // Add draggable funtionality
                ini_events(event)

                // Remove event from text input
                $('#new-event').val('')
            })
        })
    }
});