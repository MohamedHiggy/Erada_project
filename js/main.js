$(function() {
  "use strict";
  // Toggle sidebar
  $(".toggle-sidebar").on("click", function() {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  // Toggle Submenu
  $(".toggle-submenu").on("click", function() {
    $(this)
      .find(".icon-nav")
      .toggleClass("down");
    $(this)
      .next(".child-links")
      .slideToggle();
  });
  // Open / Close Fullscreen
  $(".toggle-fullscreen").on("click", function() {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      // Page Is Now Full Screen
      openFullscreen();
    } else {
      // Page is Not Full Screen
      closeFullscreen();
    }
  });
  // active links
  $(".links-area li a").click(function() {
    $(this)
      .parent()
      .addClass("sidebar-active-links")
      .siblings()
      .removeClass("sidebar-active-links");
  });
  //add order pobub
  $("#wizard").steps({
    headerTag: "h4",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    transitionEffectSpeed: 500,
    onStepChanging: function (event, currentIndex, newIndex) { 
        if ( newIndex >= 1 ) {
            $('.actions ul').addClass('actions-next');
        } else {
            $('.actions ul').removeClass('actions-next');
        }
        return true; 
    },
    labels: {
        finish: "تأكيد العملية",
        next: "التالى",
        previous: "السابق"
    }
  });
    // Custom Steps 
    $('.wizard > .steps li a').click(function(){
        $(this).parent().addClass('checked');
    $(this).parent().prevAll().addClass('checked');
    $(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Step
    $('.forward').click(function(){
        $("#wizard").steps('next');
    });
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    });
    // Input Focus
    $('.form-holder').delegate("input", "focus", function(){
        $('.form-holder').removeClass("active");
        $(this).parent().addClass("active");
    });
});

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}


            
$('#succes_demand').click(function(){
  Swal.fire(
      'تم توجية الطلب بنجاح',
      '',
      'success'
      )
});
//filter search
$(document).ready(function(){
  $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
});
//tabs of active link
const tabsLink = document.querySelectorAll('.links-tab-menu .nav-list .list a')
tabsLink.forEach(clickedTab => {
  clickedTab.addEventListener('click', () => {
      tabsLink.forEach(tabLink => {
          tabLink.classList.remove('active-tab')
      })
      clickedTab.classList.add('active-tab')
  })
})
//tabs of content
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.tabTarget)
          tabContents.forEach(tabContent => {
          tabContent.classList.remove('tab-active')
      })
      target.classList.add('tab-active')
  })
})