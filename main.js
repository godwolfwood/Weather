
$(document).ready(function(){
    $('form').submit(function() {
        // your code here (build up your url)
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + 
                    $("#Search").val() + "&&appid=85b7e0eb3089b46c743488ac53f0bc6f";
        $.get(url, function(res) {
            // your code here
            $('.info').html( 
                "<h1>" + res.name + "</h1>" +
                "<h3>Temperature: " + res.main.temp + "</h3>"
            );
            
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});