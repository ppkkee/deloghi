 $(function () {
     //                  $("html,body").css({
     //                      "overflow": "auto",
     //                      "height": "100%"
     //                  })

     //             $("html,body").css({
     //                 "overflow": "hidden",
     //                 "height": "100%"
     //
     //             })

     console.log("html h basic" + $("html").outerHeight(), "body h basic" + $("body").outerHeight())

     var allHeight = $("#wrapAll").height();

     //비쥬얼 배너
     var sNum = 0;
     //배너 저장하기 
     var banner = $(".banner>.visual");
     var bannerWidth = banner.width();
     //배너 복사하기
     var obj = banner.clone();
     //윈도우 높이 체크 
     var winHeight = $(window).height();
     var winWidth = $(window).width();
     //스크롤 탑
     var sTop = $(window).scrollTop();
     //비쥬얼 높이 
     var fHeight = $("#visual").outerHeight();
     //headtop 높이
     var headH = $(".headTop").outerHeight();
     //menu
     $(".hamBtn>a").click(function (e) {
         e.preventDefault();
         if ($(this).hasClass("close")) {
             console.log("x")
             $("#menu").stop().animate({
                 "left": "-100%"
             }, 300)
             $("#nav li").removeClass("active");
             $("#nav>li>a").siblings(".sub").stop().slideUp(300);

             $("html").css({
                 "overflow": "auto",
                 "height": "100%"
             })
             //			$("html").height(allHeight)
             console.log("html h open" + $("html").outerHeight(), "body h basic" + $("body").outerHeight())

         } else {
             $("#menu").stop().animate({
                 "left": 0
             }, 300)
             $("html").css({
                 "overflow": "hidden",
                 "height": "100%"
             })
             console.log("html h close" + $("html").outerHeight(), "body h basic" + $("body").outerHeight())
         }
         $(this).toggleClass("close");

     })
     //메뉴 엑티브 컬러
     $("#nav>li").click(function () {
         $(this).toggleClass("active").siblings().removeClass("active");
     })
     //메뉴 슬라이드
     $("#nav>li>a").click(function () {
         $(this).next("ul").stop().slideToggle(300);
         $(this).parent().siblings().children(".sub").stop().slideUp(300);

     })
     //fix 헤드탑 로고 제거 
     $(".headTopLogo").css("display", "none");
     //scroll
     //스크롤 상단
     $(window).scroll(function () {
         console.log("html h scroll" + $("html").outerHeight(), "body h basic" + $("body").outerHeight())
         sTop = $(this).scrollTop();
         //비쥬얼 높이 
         fHeight = $("#visual").outerHeight();
         //headtop 높이
         headH = $(".headTop").outerHeight();
         //header바꾸기
         if (sTop > fHeight) {
             $(".headTop").css({
                 "position": "fixed",
                 "background-color": "#092043",
                 "z-index": "99999"
             });
             $(".headTopLogo").css("display", "block");
         } else {
             $(".headTop").css({
                 "position": "absolute",
                 "background-color": "transparent"
             });
             $(".headTopLogo").css("display", "none");
         }
         //bottom 없애기 
         if (sTop > headH) {
             $(".bottom").css("display", "none");
         } else {
             $(".bottom").css("display", "block");
         }
         //첫화면에서 topBtn없애기 
         if (sTop == 0) {
             $(".topBtn").css("display", "none");
         } else {
             $(".topBtn").css("display", "block");
         }
         winHeight = $(window).height();
         $("#menu").outerHeight(winHeight);
         console.log($("#menu").height())

     })
     if (sTop == 0) {
         $(".topBtn").css("display", "none");
     } else {
         $(".topBtn").css("display", "block");
     }
     //메뉴 배경

     //     console.log(winWidth);

     $("#menu").outerHeight(winHeight);
     $(".visual1").outerHeight(winHeight).width(winWidth);
     $(".visual2").outerHeight(winHeight).width(winWidth);
     $(".visual3").outerHeight(winHeight).width(winWidth);


     //리사이즈
     $(window).resize(function () {
         winHeight = $(window).height();
         winWidth = $(window).width();
         bannerWidth = banner.width();
         $("#menu").outerHeight(winHeight);
         $(".visual1").outerHeight(winHeight).width(winWidth);
         $(".visual2").outerHeight(winHeight).width(winWidth);
         $(".visual3").outerHeight(winHeight).width(winWidth);
         $(".banner").css("margin-left", -sNum * winWidth + "px");
         console.log($(".banner").css("margin-left"));
         console.log("resize:" + (-sNum * bannerWidth), sNum, bannerWidth);
     })

     //banner
     //오른쪽 버튼에 이벤트 주기 
     $(".right").on("click", function () {
         //console.log(sNum,bannerWidth,(-sNum * bannerWidth));
         if (sNum == 3) {
             $(".banner").css("margin-left", 0)
             sNum = 0;
         }
         sNum++
         moveBanner();
     })
     $(".left").on("click", function () {
         if (sNum == 0) {
             $(".banner").css("margin-left", -winWidth * 3 + "px");
             sNum = 3;
         }
         sNum--;
         moveBanner();
     })

     function moveBanner() {
         $(".banner").stop().animate({
             "margin-left": -sNum * winWidth + "px"
         }, 1000)
     }
     //swipe
     $("#visual").swipe({
         swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
             if (direction == "left") {
                 //왼쪽
                   $(".right").trigger("click");
             } else if (direction == "right") {
                 //오른쪽
                 threshold: 0
                   $(".left").trigger("click");
             }
         },
     });


     //자동 실행
     var timer = setInterval(function () {
         $(".right").trigger("click");
     }, 8000)
     $("#visual").mouseover(function () {
         clearInterval(timer);
     })
     //     visual에서 마우스가 벗어나면 setInterval
     $("#visual").mouseout(function () {
         timer = setInterval(function () {
             $(".rightBtn").trigger("click");
         }, 2000)
     })

     //블랙퍼스트 콜렉션 탭메뉴
     $(".bcMenu>li").click(function (e) {
         e.preventDefault();
         var sNum = $(this).index();
         console.log(sNum);
         $(this).addClass("active").siblings().removeClass("active");
         $(".bcItem>ul").eq(sNum).addClass("active").siblings().removeClass("active");
     })
     //search2 label 없애기 
     $(".search>input,.search2>input").click(function () {
         $(".search>label,.search2>label").css("display", "none");
     })
 })
