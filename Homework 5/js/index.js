$(document).ready(function(){
    $.get('https://api.coindesk.com/v1/bpi/currentprice/BGN.json', function(data, status){
        console.log('Status:', status);
        console.log('Data:', data);
        
    });
});//on document ready






/*
       $(document).ready(function(){
          var imgPath = './pics-large/';
          $.get('./images.json', function(data,status){
            console.log('Status:', status);
            console.log('data:',data);
            $('#title').html(data.title);
            $.each( data.items, function(index,item){
              var sectionHTML = $('#template').html();
              var section = $(sectionHTML).clone();
              
              section.find('h2').html(item.title);
              section.find('p').html(item.shortinfo);
              section.find('footer a:nth-child(2)').attr('href',item.url);
              $('#main').append(section);

            });//for each item in data.items
          });//get images 
       });//on document ready
*/