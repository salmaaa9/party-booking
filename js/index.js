console.log($('.sideNav').width());

$('.close').on('click',function(){
    $('.sideNav').css({left : -$('.sideNav').width()})
})
$('#menu').on('click',function(){
    this.color = 'red'
    console.log('clicked');
    $('.sideNav').css({left : 0})
})
