$(document).ready(function() {


    /*FUNCTION THAT SHOWS THE INFORMATION IN THE INDEX.HTML FILE ABOUT BTCS RATE*/
    function print(stoinost, imgSrc) {
        $("#template p").text("1 BTC = " + valueFinal);

        $("#template img").attr("src", imgSrc);
    } /*CLOSING "print" FUNCTION */

    /*FUNCTION THAT LOADS FROM EXTERNAL JSON FILE THE INFO ABOUT THE RATE OF BTC IN BGN FOR FIRST TIME. 
        15 SECS AFTER THE "function reloadSecondURL" LOADS*/
    var valueFinal = 0.;

    function reload() {
        $.get('https://www.bitstamp.net/api/v2/ticker_hour/btceur/', function(data, status) {
            var fixBNB = 1.95583; /*EUR IN BGN - INFO FROM BNB*/
            console.log('Status:', status);
            console.log('data:', data);
            var btc = data.last; /*GETTING THE LAST VALUE FOR 1BTC*/
            var btcTMP = btc; /* TRANSFERING THE VALUE OF 1BTC TO TEMPORARY VARIABLE TO MAKE COMAPRISOON BETWEEN THEM*/
            if (btcTMP != btc) { /*DOING A COMAPRISON BETWEEN THE 2 VARIABLES AND TAKE THE CORRESPONDING RESULT*/
                //console.log(btcTMP);
                var btcInBGN = btcTMP * fixBNB;
                //console.log(btcInBGN);
            } else {
                //console.log(btc);
                var btcInBGN = btc * fixBNB;
                //console.log(btcInBGN);
            }

            valueFinal = ((btcInBGN).toFixed(2)) + " лв.";
            //console.log(valueFinal);
            var srcIMG = "../images/arrow-up.png";
            print(valueFinal, srcIMG);

        });
    }; /*CLOSING "reload" function*/
    reload();

    /*FUNCTION THAT SHOWS THE LAST RATE INFO DOR BTC ON EVERY 15 SECS*/
    function reloadSecondURL() {
        $.get('https://www.bitstamp.net/api/v2/ticker_hour/btceur/', function(data, status) {
            var fixBNB = 1.95583; /*EUR IN BGN - INFO FROM BNB*/
            console.log('Status:', status);
            console.log('data:', data);
            var btc = data.last; /*GETTING THE LAST VALUE FOR 1BTC*/
            var btcTMP = btc; /* TRANSFERING THE VALUE OF 1BTC TO TEMPORARY VARIABLE TO MAKE COMAPRISOON BETWEEN THEM*/
            if (btcTMP != btc) { /*DOING A COMAPRISON BETWEEN THE 2 VARIABLES AND TAKE THE CORRESPONDING RESULT*/
                //console.log(btcTMP);
                var btcInBGN = btcTMP * fixBNB;
                //console.log(btcInBGN);
            } else {
                //console.log(btc);
                var btcInBGN = btc * fixBNB;
                //console.log(btcInBGN);
            }

            valueFinal = ((btcInBGN).toFixed(2)) + " лв.";
            //console.log(valueFinal);
            print(valueFinal);

        });
    };

    setInterval(reloadSecondURL, 15000); //RELOADING ON EVERY 15 SEC THE FUNCTION WITH UPDATED DATA 
}); //ON DOCUMENT READY