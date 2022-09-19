//let Timer
$(function () {
  // 메인배너 슬라이드
  var showBanner = 0;
  showBanner++;

  setInterval(fadeBanner, 3000);
  function fadeBanner() {
    console.log(showBanner);
    if (showBanner > 0) {
      $(".banner>li").eq(showBanner).stop().css("opacity", "1").siblings().css("opacity", "0");
      showBanner++;
      if (showBanner > 4) {
        showBanner = 0;
        $(".banner>li").eq(showBanner).stop().css("opacity", "1")
          .siblings().css("opacity", "0");
        showBanner++;
      }
    }
  }

  //햄버튼
  $(".hamBox>a").click(function () {
    $(this).toggleClass("active");
  })
  
  $(".hamBox").click(function () {
    if ($("#nav>.navMenu").css("display") == "none") {
      $("#nav>.navMenu").show(); //display :none 일떄
    } else {
      $("#nav>.navMenu").hide(); //display :block 일떄
    }
  });
    
  // 직사각형 슬라이드
  $(".line1").infiniteslide({
    'clone': 3,
    'speed': 50,
    'pauseonhover': false,
    'responsive': true,
  });

  var menu = ['가구', '조명', '홈 데코', '빠른 배송']
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //스크롤 슬라이드
  var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    scrollbar: {
      el: '.js-swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
    },
  });

  $(window).resize(function () {
    if (window.innerWidth > 870) {
      $("#nav>.navMenu").css("display", "block");
    } else {
      $("#nav>.navMenu").css("display", "none");
    }
  });

  //배너의 너비값
  var wWidth = $(window).outerWidth();
  var showBanner1 = 0;
  var showCount = 2;
  var first = $(".bannerSub>li:lt(2)").clone();
  var last = $(".bannerSub>li:gt(2)").clone();
  $(".bannerSub").append(first);
  $(".bannerSub").prepend(last);
  var bannerSubCount = $(".bannerSub>li").length;
  console.log(bannerSubCount)
  var bannerSubWidth = bannerSubCount * 100 / showCount;
  $(".bannerSub").outerWidth(bannerSubWidth + "%");
  var bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount;
  $(".bannerSub>li").outerWidth(bannerSubLiWidth);

  function BannerInit() {
    showBanner1 = 0;
    if (wWidth > 767) {
      $(".bannerSub>li").eq(1).addClass("BannerActive")
      .siblings().removeClass("BannerActive");
    } else {
      $(".bannerSub>li:first-child").addClass("BannerActive");
    }

    // 배너 시작 시 BannerActive 추가
    if (wWidth > 767) {
      showCount = 2;
      $(".bannerSub").css({
        "margin-left": -bannerSubLiWidth / 2,
        "left": 0
      });
    }
    else {
      showCount = 1;
      $(".bannerSub").css({
        "margin-left": 0,
        "left": 0
      });
      bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount
    }
    bannerSubWidth = bannerSubCount * 100 / showCount;
    $(".bannerSub").outerWidth(bannerSubWidth + "%");
    bannerSubLiWidth = $(".bannerSub").outerWidth() / bannerSubCount;
    $(".bannerSub>li").outerWidth(bannerSubLiWidth);
    }
    BannerInit();
    $(window).on("resize", function () {
    wWidth = $(window).outerWidth();
    BannerInit();
    })

  // 배너 이동
  function moveBannerSub() {
    $(".bannerSub").stop().animate({
      "left": -showBanner1 * bannerSubLiWidth
    }, 1000)
    if (wWidth > 767) {
      $(".bannerSub>li").eq(showBanner1 + 1).addClass("BannerActive").siblings().removeClass("BannerActive");
    } else {
      $(".bannerSub>li").eq(showBanner1).addClass("BannerActive").siblings().removeClass("BannerActive");
    }
    if (showBanner1 == bannerSubCount) {
      $(".number>.count").text(1);
    }
    else {
      if (showBanner1 > 9) {
        $(".number>.count").text(1);
      } else {
        $(".number>.count").text(showBanner1 + 1);
      }
    }
  }
  $(".bannerNextBtn").on("click", function () {
    if (showBanner1 > 9) {
      showBanner1 = 0;
      $(".bannerSub").css("left", -showBanner1 * bannerSubLiWidth)
    }
    showBanner1++;
    moveBannerSub();
  })
  $(".bannerPrevBtn").on("click", function () {
    if (showBanner1 == 0) {
      showBanner1 = 10;
      $(".bannerSub").css("left", -showBanner1 * bannerSubLiWidth)
    }
    showBanner1--;
    moveBannerSub();
  })

  //직사각형2 슬라이드
  $(".line2").infiniteslide({
    'clone': 3,
    'speed': 50,
    'pauseonhover': false,
    'responsive': true,
  });
});