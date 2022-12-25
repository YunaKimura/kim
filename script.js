$(function(){

    $('.menu-trigger').click(function(){

        if($('.menu-trigger').hasClass('active')){
            $('#menu-modal').fadeOut(500);
            $('.menu-trigger').removeClass('active');
           

        }else{
            $('#menu-modal').fadeIn(500);
            $('.menu-trigger').addClass('active');
            
        }
        
    });

    $('.top-wrapper').bgSwitcher({
        images: ['file:///C:/Users/81806/Pictures/mv1_mini.png','file:///C:/Users/81806/Pictures/mv2_mini.png','file:///C:/Users/81806/Pictures/mv3_mini.png','file:///C:/Users/81806/Pictures/mv4_mini.png'], // 切り替える背景画像を指定
        interval:5000,
        loop:true,
        duration:300,
    });



});


var bar = new ProgressBar.Circle('#container-one', {
    strokeWidth: 8,
    easing: 'linear',
    duration: 3500,
    color: '#fff',
    trailColor: '#999',
    trailWidth: 3,
    svgStyle: null
  });
  
bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#container-two', {
    strokeWidth: 8,
    easing: 'linear',
    duration: 3500,
    color: '#fff',
    trailColor: '#999',
    trailWidth: 3,
    svgStyle: null
  });
  
bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#container-three', {
    strokeWidth: 8,
    easing: 'linear',
    duration: 3500,
    color: '#fff',
    trailColor: '#999',
    trailWidth: 3,
    svgStyle: null
  });
  
bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#container-four', {
    strokeWidth: 8,
    easing: 'linear',
    duration: 3500,
    color: '#fff',
    trailColor: '#999',
    trailWidth: 3,
    svgStyle: null
  });
  
bar.animate(1.0);  // Number from 0.0 to 1.0