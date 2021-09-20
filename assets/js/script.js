"use strict";

// ローディング判定
$(function () {
  $(window).on("load", function () {
    $("body").attr("data-loading", "true");
  }); //ナビゲーショントグル

  $('header').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });
});
jQuery(function () {
  // スクロール判定
  jQuery(window).on("scroll", function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery("body").attr("data-scroll", "true");
    }

    if (800 > jQuery(this).scrollTop()) {
      jQuery(".header").removeClass("header_bg");
    }

    if (800 == jQuery(this).scrollTop()) {
      jQuery(".header").removeClass("header_bg");
    }

    if (800 < jQuery(this).scrollTop()) {
      jQuery(".header").addClass("header_bg");
    } else {
      jQuery("body").attr("data-scroll", "false");
    }
  });
  /* ドロワー */

  jQuery(".js-drawer").on("click", function (e) {
    e.preventDefault();
    var targetClass = jQuery(this).attr("data-target");
    jQuery("." + targetClass).toggleClass("is-checked");
    return false;
  });
  /* スムーススクロール */

  jQuery('a[href^="#"]').click(function () {
    var header = jQuery(".js-header").height();
    var speed = 300;
    var id = jQuery(this).attr("href");
    var target = jQuery("#" == id ? "html" : id);
    var position = jQuery(target).offset().top - header;

    if ("fixed" !== jQuery("#header").css("position")) {
      position = jQuery(target).offset().top;
    }

    if (0 > position) {
      position = 0;
    }

    jQuery("html, body").animate({
      scrollTop: position
    }, speed);
    return false;
  });
  /* 電話リンク */

  var ua = navigator.userAgent;

  if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
    jQuery('a[href^="tel:"]').css("cursor", "default").on("click", function (e) {
      e.preventDefault();
    });
  }
});