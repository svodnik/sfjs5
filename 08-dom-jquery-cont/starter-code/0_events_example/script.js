$("#clickButton").on('click', function(event) {
    console.log(event);
    var clickInfo = {
        type : event.type,
        screenX : event.screenX,
        screenY : event.screenY,
        clientX : event.clientX,
        clientY : event.clientY,
        button : event.button,
        ctrlKey : event.ctrlKey,
        shiftKey : event.shiftKey,
        altKey : event.altKey
    };
    var $targetUl = $("#summaryList");
    $targetUl.html("");
    
    for (var prop in clickInfo) {
        var $thingLi = $('<li>').html("<span class=\'prop-name\'>" + prop + "</span>" + ": " + clickInfo[prop]);
        $targetUl.append($thingLi);
    }
});

