$(function () {
  // back to top
  $("#back_to_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // header nav
  var headerNav = $("#header_nav");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      headerNav.addClass("scrolled");
    } else {
      headerNav.removeClass("scrolled");
    }
  });

  // modal1
  $("#modal-opener" + 1).click(function () {
    $("#modal-wrap" + 1).addClass("active");
    return false;
  });

  $("#modal-close" + 1).click(function () {
    $("#modal-wrap" + 1).removeClass("active");
    return false;
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#modal-body" + 1).length) {
      $("#modal-wrap" + 1).removeClass("active");
    }
  });

  // modal2
  $("#modal-opener" + 2).click(function () {
    $("#modal-wrap" + 2).addClass("active");
    return false;
  });

  $("#modal-close" + 2).click(function () {
    $("#modal-wrap" + 2).removeClass("active");
    return false;
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#modal-body" + 2).length) {
      $("#modal-wrap" + 2).removeClass("active");
    }
  });

  // sp menu
  $(".header-nav__icon--sp-menu").on("click", function () {
    $(this).addClass("inactive");
    $(".header-nav__list--sp").animate({ right: "0" }, 500);
  });

  $(".header-nav__button--close").on("click", function () {
    $(".header-nav__list--sp").animate({ right: "-80%" }, 500);
    $(".header-nav__icon--sp-menu").removeClass("inactive");
  });
});
