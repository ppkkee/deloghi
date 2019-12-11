    $(function () {

        //윈도우 높이 체크 
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        $(window).scroll(function () {
            var sTop = $(window).scrollTop();
            var headH = $(".headTop").outerHeight();

            if (sTop > headH) {
                $(".headTop").css({
                    "position": "fixed",
                    "background-color": "#092043",
                    "z-index": "99999",
                    "height": "80px",
                    "width": "100%"
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


        //search label 없애기
        $(".search>input,.search2>input").click(function () {
            $(".search>label,.search2>label").css("display", "none");
        })


        //메뉴
        //메뉴 배경
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        //     console.log(winWidth);
        $("#menu").outerHeight(winHeight);


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

        //리사이즈
        $(window).resize(function () {
            winHeight = $(window).height();
            winWidth = $(window).width();
            $("#menu").outerHeight(winHeight);
        })

        //아이템 빅이미지 배너
        $(".subBtn>li").click(function (e) {
            e.preventDefault();
            var sNum = $(this).index();
            $(".subBanner>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
        })
        //데디카 탭메뉴
        $(".spec>li").click(function (e) {
            e.preventDefault();
            $(this).find(".specSub").slideToggle(500);
            $(this).siblings().find(".specSub").slideUp(500);
        })

        //관련제품 플러그인 카루셀
        $(".subItem").bxSlider({
            "minSlides": 2,
            "maxSlides": 4,
            "slideWidth": 180,
            "moveSlides": 1,
            "slideMargin": 2,
            "controls": false
        });
        //scrollNav tab menu

        $(".scrollNav>li").click(function () {
            var sn = $(this).index();
            console.log(sn)
            $(this).addClass("active").siblings().removeClass("active");
            $(".scrollWrap>div").eq(sn).css("padding-top", "100px").siblings().css("padding-top","0");
        })
    })
