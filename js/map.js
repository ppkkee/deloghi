$(function () {
    var mapX = new Array(37.51785, 35.1628461);
    var mapY = new Array(127.01770, 129.1548617);
    var i = 0;
    aa();




    //지도오오오 시작
    function aa() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(mapX[i], mapY[i]), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        var imageSrc = 'images/icon_map.png', // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(169, 59), // 마커이미지의 크기입니다
            imageOption = {
                offset: new kakao.maps.Point(19, 69)
            }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(mapX[i], mapY[i]); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }
    //지도오오오 끝

    $(".store>div").click(function () {
        i = $(this).index();
        console.log(i);

        aa();
        //        #092043
        $(".store>div").find("span").css("display", "none");
        $(".store>div").eq(i).find("span").css("display", "inline-block");

    })

    //             $("html,body").css({
    //                 "overflow": "auto",
    //                 "height": "100%"
    //             })

    //             $("html,body").css({
    //                 "overflow": "hidden",
    //                 "height": "100%"
    //
    //             })

    //윈도우 높이 체크 
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $(window).scroll(function () {
        var sTop = $(this).scrollTop();
        var headH = $(".headTop").outerHeight();

        if (sTop > headH) {
            $(".headTop").css({
                "position": "fixed",
                "background-color": "#092043",
                "z-index": "99999",
                "height": "80px",
                //                    "width": "100%"
            });
            $(".headTopLogo").css({
                "top": "20px"
            })
        }
        if (sTop == 0) {
            $(".topBtn").css("display", "none");
        } else {
            $(".topBtn").css("display", "block");
        }
    })

    //메뉴
    //메뉴 배경
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    //     console.log(winWidth);
    $("#menu").outerHeight(winHeight);



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
    //리사이즈
    $(window).resize(function () {
        winHeight = $(window).height();
        winWidth = $(window).width();
        $("#menu").outerHeight(winHeight);
    })



    //search 라벨 없애기
    $(".search>input,.search2>input,.msearch>input").click(function () {
        $(".search>label,.search2>label,.msearch>label").css("display", "none");
    })




})
