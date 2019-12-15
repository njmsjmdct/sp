$(function(){
    
    
    
    var count = 0;
    var infolength = $('.text-info-content').length;
    
    /* section2 내용변경 */
    function move(idx){
        
        count = idx;
        
        $('.text-info-content').removeClass('active');
        $('.text-info-content').eq(idx).addClass('active');
        $('#section02 .section02-wrap .img-info-wrap .img-info li').removeClass('active');
        $('#section02 .section02-wrap .img-info-wrap .img-info li').eq(idx).addClass('active');
        
        btninvisible();
        bgc();
        
    }
    /* section2 btn 검사 */
    function btninvisible() {
        var prevbtn = $('.btn .prev');
        var nextbtn = $('.btn .next');
        
        if(count==0){
            prevbtn.addClass('invisible');
        }else{
            prevbtn.removeClass('invisible');
        }
        
        if(count==infolength-1){
            nextbtn.addClass('invisible');
        }else{
            nextbtn.removeClass('invisible');
        }
        
        
    }
    /* section2 bgc 변경 */
    function bgc(){
        
        var content = $('.text-info-wrap');
        
        if(count==0){
            content.css('background-color', 'orange');
        }
        if(count==1){
            content.css('background-color', '#00EB61');
        }
        if(count==infolength-1){
            content.css('background-color', '#FE7F71');
        }
        
        
    }
    
    /* section2 btn */
    $('.btn > div').click(function(){
        
        if($(this).hasClass('prev')){
            move(count -1);
        }else{
            move(count +1);
        }
        
        
    });
    
    /* section3 코스설명 */
    $('.section03-wrap .course-wrap .course-btn li').click(function(){
        var index = $(this).index();
        
        course(index);
    })
    
    function course(idx){
        
        $('.section03-wrap .course-wrap .course-btn li').removeClass('active');
        $('.section03-wrap .course-wrap .course-btn li').eq(idx).addClass('active');
        
        $('.section03-wrap .course-wrap .course-img img').attr('src', 'images/zooMap0'+idx+'.png');
        $('.section03-wrap .course-wrap .course-info .course-info-img img').attr('src', 'images/zooimg0'+idx+'.png');
        
        var coursetitle = $('.section03-wrap .course-wrap .course-info .course-info-text h3');
        var coursetext = $('.section03-wrap .course-wrap .course-info .course-info-text ul');
        
        if(idx==0){
            
            coursetitle.text('호랑이길');
            coursetext.html("<li>거리: 1.5km</li><li>총 관람시간: 2시간</li><li>관람동물: 얼룩말, 고릴라, 우랑우탄, 사자, 치타, 식물원, 렛서팬더, 퓨마, 재규어, 코요테, 도마뱀, 악어, 스라소니, 노랑목도리담비, 표범, 늑대, 여우, 호랑이, 반달가슴곰 등</li>");
        }
        if(idx==1){
            coursetitle.text('낙타길');
            coursetext.html("<li>거리: 1.7km</li><li>총 관람시간: 2시간 20분</li><li>관람동물: 얼룩말, 타조, 미어캣, 하마, 코끼리, 코뿔소, 큰뿔소, 낙타, 황새, 관학, 저어새, 늑대, 렛서팬더, 반달가슴곰 등</li>");
            
        }
        if(idx==2){
            coursetitle.text('사슴길');
            coursetext.html("<li>거리: 1.8km</li><li>총 관람시간: 2시간</li><li>관람동물: 홍학, 기린, 코끼리, 코뿔소, 큰뿔소, 펠리칸, 두루미, 콘돌, 독수리, 사슴, 종보전교육관 등</li>");
        }
        if(idx==infolength){
            coursetitle.text('부엉이길');
            coursetext.html("<li>거리: 1.8km</li><li>총 관람시간: 2시간 40분</li><li>관람동물: 홍학, 기린, 캥거루, 에뮤, 곤충류, 부엉이, 두루미, 펠리칸, 앵무, 매커우, 독수리, 콘돌, 라마, 아메리카테이퍼, 아나콘다 등</li>");
        }
        
        
    }
    
    $('.section04-wrap .booking-wrap .booking .booking-info .booking-btn').mouseenter(function(){
       
        $(this).addClass('active');
        $(this).parent().parent().find('.booking-img').children().css('transform', 'scale(2) rotate(10deg)');
        
    }).mouseleave(function(){
        $(this).removeClass('active');
        $('.section04-wrap .booking-wrap .booking .booking-img span').css('transform', 'scale(1) rotate(0deg)');
    });
    
    
    
    
    /* window scroll 이벤트 */
    
    var section1 = $('#section01').offset().top;
    var section2 = $('#section02').offset().top;
    var section3 = $('#section03').offset().top;
    var section4 = $('#section04').offset().top;
    var Scrolling = false;
    var location =  'firstPage';
    
    
    
    
//    $(window).scroll(function(){
//        var winscr = $(window).scrollTop();
//        
//       
//        
//        if(!Scrolling){
//            if(winscr > section1 && location == 'firstPage'){
//                scrollPage(section2, 'secondPage');
//            }
//            else if( winscr > section2 +1 && location == 'secondPage'){
//                scrollPage(section3, 'thirdPage');
//            }
//            else if( winscr > section3 +1 && location == 'thirdPage'){
//                scrollPage(section4, 'fourthPage');
//            }
//            else if( winscr < section2 -1 && location == 'secondPage'){
//                scrollPage(section1, 'firstPage');
//            }
//            else if( winscr < section3 -1 && location == 'thirdPage'){
//                scrollPage(section2, 'secondPage');
//            }
//            else if( winscr < section4 -1 && location == 'fourthPage'){
//                scrollPage(section3, 'thirdPage');
//            }
//            
//        }
//        
//        
//        function scrollPage(nextpage, page){
//            location = page;
//            Scrolling = true;
//            
//            $('html, body').stop().animate({
//                scrollTop: nextpage
//            }, 500, function(){
//                Scrolling = false;
//            });
//        }
//        
//        
//        $('.nav li').click(function(){
//            
//            var index = $(this).index();
//            
//            if(index == 0){
//                scrollPage(section1, 'firstPage');
//            }
//            else if(index == 1){
//                scrollPage(section2, 'secondPage');
//            }
//            else if(index == 2){
//                scrollPage(section3, 'thirdPage');
//            }
//            else if(index == 3){
//                scrollPage(section4, 'fourthPage');
//            }
//            
//            
//        });
//        
//        
//    });
    
    
    
    btninvisible();
    bgc();
    
    
    $(".section").each(function () {
            
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function(event) {

                var delta = 0;
                var moveTop = "";
                var sectionlength = $(".section").length;
                var winEvent = "";
                   
                if(!winEvent) {
                    winEvent = window.event;
                }

                if(winEvent.wheelDelta) {

                    delta = winEvent.wheelDelta 
//                    if(window.opera) {
//                        delta = -delta;
//                    }
                }

               
//                else if(winEvent.detail) {
//                    delta = -winEvent.detail / 3;
//                }
                
                // 마우스휠을 위에서 아래로 이동
                if(delta < 0) {

                    // 마지막 BOX 보다 순서값이 작은 경우에 실행
                    if($(this).index() < sectionlength) {
                        
                        console.log("▼");
                        if($(this).next() ) {
                            moveTop = $(this).next().offset().top;
                        }
                    }

                    // 마지막 BOX보다 더 아래로 내려가려고 하는경우 알림창 출력
                    else {
                        return false;
                    }
                }

                // 마우스휠을 아래에서 위로 이동
                else {

                    // 첫번째 BOX 보다 순서값이 큰 경우에 실행
                    if($(this).index() > 0) {

                        console.log("▲");
                        if($(this).prev() ) {
                            moveTop = $(this).prev().offset().top;
                        }
                    }

//                     첫번째 BOX 더 위로 올라가려고 하는 경우 알림창 출력
                    else {
                        return false;
                    }
                }
                
                

                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop : moveTop + "px"
                }
                , 500);
                
                
                
                
                
                
            });
        });
    
    
    $('.nav li').click(function(){
                    
                    var index = $(this).index();
                    
                    if(index==0){
                        moveTop = $('#section01').offset().top;
                    }
                    else if(index==1){
                        moveTop = $('#section02').offset().top;
                    }
                    else if(index==2){
                        moveTop = $('#section03').offset().top;
                    }
                    else if(index==3){
                        moveTop = $('#section04').offset().top;
                    }
        
        
            $('html, body').stop().animate({
                scrollTop: moveTop
            }, 500)

                    
                });
    
    
});



