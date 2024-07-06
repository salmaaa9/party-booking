// sideNav display
$('.close').on('click',function(){
    $('.sideNav').css({left : -$('.sideNav').width()})
})
$('.options').on('click',function(){
    $('.menu').removeClass('d-none')
    $('.sideNav').css({left : 0})
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
  
