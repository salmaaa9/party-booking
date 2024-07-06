// sideNav display
$('.close').on('click',function(){
    $('.sideNav').css({left : -$('.sideNav').width()})
})
// leh first time open too fast
$('.options').on('click',function(){
    $('.sideNav').css({left : 0})
    $('.menu').removeClass('d-none')
})

// menu sliding
$('.menu ul a').on('click',function(){
    var href = $(this).attr("href");
    var offset = $(`${href}`).offset().top;
    console.log(offset,href);
    $('html, body').animate({scrollTop:offset},2000,'ease');
    $('.menu').addClass('d-none')
})

  
// sliderDown
$('#sliderDown h3').click(function() {

    const parent = $(this).closest('.second');
    parent.find('p.inner').not($(this).next()).slideUp(500);
    
    const section = $(this).next();
    console.log(section);
  
    // Toggle the paragraph within the section
    $(this).next().slideToggle(500);

  });

// duration 

const eventDate = new Date("oct 25,2023 00:00:00");
// Get today's date
var now1 = new Date();
var seconds = Math.abs(eventDate.getSeconds() - now1.getSeconds());
console.log(seconds);


function getDataDiffrence(){

    var now = new Date();

    // Find the difference between the dates
    var year = eventDate.getFullYear()- now.getFullYear();
    var days = eventDate.getDate() - now.getDate();
    var hours = Math.abs(eventDate.getHours() - now.getHours());
    var minutes = Math.abs(eventDate.getMinutes() - now.getMinutes());
    seconds = seconds-1;
    if (seconds <= 0 ){
        seconds = 60 + seconds
    }
              
    if (year < 0){
        days = -(days);
    }
    // Display the difference
    $('.days,.hours,.minutes,.seconds').change
    $('.days').html(`${days} D`)
    $('.hours').html(`${hours} H`)
    $('.minutes').html(`${minutes} M`)
    $('.seconds').html(`${seconds} S`)
    // console.log(days,hours,minutes,seconds);
}

// Call the function initially and set an interval to update every second
getDataDiffrence();
setInterval(getDataDiffrence, 1000);

// contact
$('#contactMessage').on('keyup',function(){
    var count = this.value.length;
    $('#charCount').html(100-count);
    if(count > 100){
        $('#contactMessage').addClass('error')
        $('#charCount').html('error char more than 100');
        document.getElementById('form').submit.disabled = true;
    }
    else{
        $('#contactMessage').removeClass('error')
        document.getElementById('form').submit.disabled = false;
    }
})