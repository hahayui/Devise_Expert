$(document).ready(function() {
    var srcImg;
    var btcTmp = 0;
    //var btcTmpForSecondReload = 0;
    console.log(btcTmp);
    /*FUNCTION THAT SHOWS THE INFORMATION IN THE INDEX.HTML FILE ABOUT BTCS RATE*/
    function print(stoinost, imgSrc) {
        $("#p p").text("1 BTC = " + valueFinal);
        $("#img").attr("src", imgSrc);
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
            btcTmp = btc; /* TRANSFERING THE VALUE OF 1BTC TO TEMPORARY VARIABLE TO MAKE COMAPRISOON BETWEEN THEM*/
            console.log(Number(btcTmp));
            if (btcTmp != btc) { /*DOING A COMAPRISON BETWEEN THE 2 VARIABLES AND TAKE THE CORRESPONDING RESULT*/
                //console.log(btcTmp);
                var btcInBGN = btcTmp * fixBNB;
                //console.log(btcInBGN);
            } else {
                //console.log(btc);
                var btcInBGN = btc * fixBNB;
                //console.log(btcInBGN);
            }


            valueFinal = ((btcInBGN).toFixed(2)) + " лв.";
            //console.log(valueFinal);
            srcImg = './images/minus.png';
            print(valueFinal, srcImg);

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
            var valueBtc = Number(btc);
            console.log(valueBtc);
            console.log(btcTmp);


            var btcTmp1 = btc; /* TRANSFERING THE VALUE OF 1BTC TO TEMPORARY VARIABLE TO MAKE COMAPRISOON BETWEEN THEM*/
            valueBtcTmp = Number(btcTmp1);



            if (btcTmp1 != btc) { /*DOING A COMAPRISON BETWEEN THE 2 VARIABLES AND TAKE THE CORRESPONDING RESULT*/
                //console.log(btcTmp);
                var btcInBGN = btcTmp1 * fixBNB;
                //console.log(btcInBGN);
            } else {
                //console.log(btc);
                var btcInBGN = btc * fixBNB;
                //console.log(btcInBGN);
            }

            if (btc < btcTmp) {
                //console.log(btc < btcTmp);
                srcImg = './images/down-arrow.png';
            } else if (btc > btcTmp) {
                srcImg = './images/up-arrow.png';

            } else if (btc == btcTmp) {
                srcImg = './images/minus.png';
            }
            valueFinal = ((btcInBGN).toFixed(2)) + " лв.";

            print(valueFinal, srcImg);
            btcTmp = btcTmp1;
            btcTmp1 = 0;
            //console.log(valueFinal);
            //print(valueFinal, srcImg);

        });
    };

    setInterval(reloadSecondURL, 15000); //RELOADING ON EVERY 15 SEC THE FUNCTION WITH UPDATED DATA 
}); //CLOSING ON DOCUMENT READY