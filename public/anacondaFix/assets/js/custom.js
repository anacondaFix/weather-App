$(document).ready(function () {
  // mobile menu animation
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });

  // login-click function
  $(".loginClick").click(function () {
    $("#loginWrapper").slideDown();
    $('body').addClass('fixedbody')
  });
   // login-close function
  $(".close-button").click(function () {
    $("#loginWrapper").slideUp();
    $('body').removeClass('fixedbody')
  });

  // signupClick function
  $(".signupClick").click(function () {
    $("#signupWrapper").slideDown();
    $('body').addClass('fixedbody')
  });
  $(".close-sign-up-button").click(function () {
    $("#signupWrapper").slideUp();
  });

  // login-link-1 ( signup page)
  $(".login-link-1").click(function () {
    $("#signupWrapper").slideUp();
    $("#loginWrapper").slideDown();
    $('body').addClass('fixedbody')
  });
  $(".close-sign-up-button").click(function () {
    $("#signupWrapper").slideUp();
    $('body').removeClass('fixedbody')
  });

  // Edit popup function
  $(".editClick").click(function () {
    $("#editPopupWrapper").slideDown();
    $('body').addClass('fixedbody')
  });

  $(".close-edit-button").click(function () {
    $("#editPopupWrapper").slideUp();
    $('body').removeClass('fixedbody')
  });

  // my profile accordion
  $(".accordion-click").click(function () {
    $(this).parents(".profile-detail-row").toggleClass("active-accordion");
  });

  //---- nav bar end ----
  //  AOS.init();
});
