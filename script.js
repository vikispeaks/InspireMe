$(document).ready(function () {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    var tweet;

    var getQuote = function (data) {
        $(".quote").text(data.quoteText);
        if (data.quoteAuthor === '') {
            data.quoteAuthor = 'Unknown';
        }
        tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + '-- ' + data.quoteAuthor +
            ' @vikispeaks';
        $(".author").text('--' + data.quoteAuthor);
    };

    var getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var setRandomColor = function () {
        $(".bg").css("background", getRandomColor());
        $("h2").css("background", getRandomColor());
    }

    var fetchQuote = function () {
        $.getJSON(url, getQuote, 'jsonp');
        setRandomColor();
    };

    fetchQuote();

    $("#quote").click(function () {
        fetchQuote();
        setRandomColor();
    });

    $("#tweet-button").click(function () {
        window.open(tweet, '_blank');
    });
});