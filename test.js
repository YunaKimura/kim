$(function(){

    $('.menu-trigger').click(function(){

        if($('.menu-trigger').hasClass('active')){
        
            $('.menu-trigger').removeClass('active');
            

        }else{
            
            $('.menu-trigger').addClass('active');
            
        }
        
    });

    $('.bg-slider').bgSwitcher({
        images: ['file:///C:/Users/81806/Pictures/mv1_mini.png','file:///C:/Users/81806/Pictures/mv2_mini.png','file:///C:/Users/81806/Pictures/mv3_mini.png','file:///C:/Users/81806/Pictures/mv4_mini.png'], // 切り替える背景画像を指定
        interval:5000,
        loop:true,
        duration:300,
    });

    $('.progress').find('li').eq(0).addClass('open').show() ;

    var changeProgress = function(){

        function progressOne (){

            var bar = new ProgressBar.Circle('#container-one', {
                strokeWidth: 8,
                easing: 'linear',
                duration: 3500,
                color: '#333',
                trailColor: '#999',
                trailWidth: 3,
                svgStyle: null
              });
              
            bar.animate(1.0);  // Number from 0.0 to 1.0
        
        }
        $('.progress').hide();
        $('.progress').find('li').eq(0).addClass('open').show();
        
        
        function progressTwo (){
        
            var bar = new ProgressBar.Circle('#container-two', {
                strokeWidth: 8,
                easing: 'linear',
                duration: 3500,
                color: '#333',
                trailColor: '#999',
                trailWidth: 3,
                svgStyle: null
              });
              
            bar.animate(1.0);  // Number from 0.0 to 1.0
        }
        
        function progressThree (){
        
            var bar = new ProgressBar.Circle('#container-three', {
                strokeWidth: 8,
                easing: 'linear',
                duration: 3500,
                color: '#333',
                trailColor: '#999',
                trailWidth: 3,
                svgStyle: null
              });
              
            bar.animate(1.0);  // Number from 0.0 to 1.0
        }
        
        
        
        function progressFour (){
        
            var bar = new ProgressBar.Circle('#container-four', {
                strokeWidth: 8,
                easing: 'linear',
                duration: 3500,
                color: '#333',
                trailColor: '#999',
                trailWidth: 3,
                svgStyle: null
              });
              
            bar.animate(1.0);  // Number from 0.0 to 1.0
        }
        
        
        

        var openIndex = $('.progress').find('li').hasClass('open').index();

        if(openIndex==0){
            $('.progress').find('li').eq(0).fadeOut(300).removeClass('open');
            $('.progress').find('li').eq(1).fadein(300).addClass('open').progressTwo();

        }else if(openIndex==1){
            $('.progress').find('li').eq(1).fadeOut(300).removeClass('open');
            $('.progress').find('li').eq(2).fadein(300).addClass('open').progressThree();
            
        }else if(openIndex==2) {
            $('.progress').find('li').eq(2).fadeOut(300).removeClass('open');
            $('.progress').find('li').eq(3).fadein(300).addClass('open').progressFour();
         
        }else if (openIndex==3){
            $('.progress').find('li').eq(3).fadeOut(300).removeClass('open');
            $('.progress').find('li').eq(0).fadein(300).addClass('open').progressOne();

        }

    }

    setInterval('changeProgress',21200);
    

    



});


const progressOne = function(){

    var bar = new ProgressBar.Circle('#container-one', {
        strokeWidth: 8,
        easing: 'linear',
        duration: 3500,
        color: '#333',
        trailColor: '#999',
        trailWidth: 3,
        svgStyle: null
      });
      
    bar.animate(1.0);  // Number from 0.0 to 1.0

}

progressOne();

const progressTwo = function(){

    var bar = new ProgressBar.Circle('#container-two', {
        strokeWidth: 8,
        easing: 'linear',
        duration: 3500,
        color: '#333',
        trailColor: '#999',
        trailWidth: 3,
        svgStyle: null
      });
      
    bar.animate(1.0);  // Number from 0.0 to 1.0
}

progressTwo();

const progressThree = function(){

    var bar = new ProgressBar.Circle('#container-three', {
        strokeWidth: 8,
        easing: 'linear',
        duration: 3500,
        color: '#333',
        trailColor: '#999',
        trailWidth: 3,
        svgStyle: null
      });
      
    bar.animate(1.0);  // Number from 0.0 to 1.0
}
progressThree();


const progressFour = function(){

    var bar = new ProgressBar.Circle('#container-four', {
        strokeWidth: 8,
        easing: 'linear',
        duration: 3500,
        color: '#333',
        trailColor: '#999',
        trailWidth: 3,
        svgStyle: null
      });
      
    bar.animate(1.0);  // Number from 0.0 to 1.0
}

progressFour();

