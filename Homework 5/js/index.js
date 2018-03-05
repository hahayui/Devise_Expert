$(document).ready(function() {
    var url = 'https://www.bitstamp.net/api/v2/ticker_hour/btceur/';
    setInterval(function() {

    }, 3000);
    $.get(url, function(data, status) {

        console.log('Status:', status);
        console.log('data:', data);
        var fixBNB = 1.95583;

        var btc = data.last;
        var btcInBGN = btc * fixBNB;
        console.log(Math.round(btcInBGN * 100) / 100);
        var section = document.querySelector('#template');
        var myArticle = document.createElement('article');
        var H1 = document.createElement('h1');
        myArticle.appendChild(H1);

        H1.textContent = Math.round(btcInBGN * 100) / 100 + " лв."; //rounded to the second dec
        section.appendChild(myArticle);
        /*setInterval(function() {
          btcInBGN.
            //$('h1').load(url)
        }, 2000);*/



    }); //function closing


}); //on document ready