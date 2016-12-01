/*$.get("https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD", function(r) {
    var s = JSON.stringify(r);
    console.log(s);
});*/

$.ajax({
    url: "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD",
    data: {
        format: "json"
    },
    success: function (response) {
        console.log(response);
    }
})