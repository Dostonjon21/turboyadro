'use strict';

// MENU

const header = $('.header');
const headerHeight = header.outerHeight();
const menu = $('.header-menu');
const menuLinks = $('.header-menu__link');
const menuRegister = $('.header-admin__btn--register');
const menuLogin = $('.header-admin__btn--login');
const menuBurger = $('.header-burger');
const menuClose = $('.header-close');

// mobile menu

menuBurger.click(function() {
   header.toggleClass('header--active');
});

menuClose.click(function() {
   header.toggleClass('header--active');
});

menuRegister.on('click', function() {
   header.removeClass('header--active');
});

menuLogin.on('click', function() {
   header.removeClass('header--active');
});

// scroll to anchor

menuLinks.on('click', function(e) {
   const anchorId = $(this).attr('href');
   const anchorOffset = $(anchorId).offset().top;

   e.preventDefault();
   menu.removeClass('header-menu--active');
   header.removeClass('header--active');
   $('html, body').animate({
      scrollTop: anchorOffset - headerHeight,
   }, 1000);
});

// MODAL

const modal = new GraphModal();

$('#form-field-password').hide();
$('#btn-login').hide();

$('#btn-password').click(function(e) {
   e.preventDefault();
   $('#form-field-password').slideDown(200);
   $('#btn-password').hide(0);
   $('#btn-login').slideDown(200);
});

$('#btn-login-modal').click(function(e) {
   e.preventDefault();
});

$('#btn-register-modal').click(function(e) {
   e.preventDefault();
});

// REVIEWS

const reviewsSlider = new Swiper('.reviews__slider', {
   slidesPerView: 1,
   spaceBetween: 40,
   autoHeight: true,
   
   pagination: {
      el: '.reviews-nav__pagination-bottom',
      clickable: true,
   },

   breakpoints: {
      1025: {
         slidesPerView: 2,
         autoHeight: false,

         navigation: {
            prevEl: '.reviews-nav__btn--prev',
            nextEl: '.reviews-nav__btn--next',
         },

         pagination: {
            el: '.reviews-nav__pagination-top',
            type: 'fraction',
         },
      },
   },
});

// FAQ

$('.faq-item__top').each(function() {
   if ($(this).parent('.faq-item').hasClass('faq-item--active')) {
      $(this).siblings('.faq-item__content').slideDown(300);
   }
});

$('.faq-item__top').click(function () {
   if ($(this).parent('.faq-item').hasClass('faq-item--active')) {
      $('.faq-item__top').parent('.faq-item').removeClass('faq-item--active');
      $('.faq-item__top').siblings('.faq-item__content').slideUp(300);
   } else {
      $('.faq-item__top').parent('.faq-item').removeClass('faq-item--active');
      $('.faq-item__top').siblings('.faq-item__content').slideUp(300);

      $(this).parent('.faq-item').addClass('faq-item--active')
      $(this).siblings('.faq-item__content').slideDown(300);
   }
});