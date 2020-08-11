!function(a,b){"use strict";b.behaviors.slick={attach:function(b,c){var d=this;a(".slick",b).once("slick",function(){var e,b=this,f=a("> .slick__slider",b).length?a("> .slick__slider",b):a(b),g=a("> .slick__arrow",b),h=a.extend({},c.slick,f.data("slick"));if("array"===a.type(h.responsive)&&h.responsive.length)for(e in h.responsive)h.responsive.hasOwnProperty(e)&&"unslick"!==h.responsive[e].settings&&(h.responsive[e].settings=a.extend({},c.slick,d.globals(f,g,h),h.responsive[e].settings));f.data("slick",h),h=f.data("slick")||{},d.beforeSlick(f,g,h),f.slick(d.globals(f,g,h)),d.afterSlick(f,h),f.hasClass("unslick")?(f.slick("unslick"),a(".slide",f).removeClass("slide--loading")):a(b).addClass("slick--initialized")})},beforeSlick:function(b,c,d){var e=this,f=a(".slide--0 .media--ratio",b);e.randomize(b,d),f.length&&f.is(":hidden")&&f.removeClass("media--ratio").addClass("js-media--ratio"),b.on("setPosition.slick",function(a,f){e.setPosition(b,c,d,f)}),a(".media--loading",b).closest(".slide").addClass("slide--loading"),b.on("lazyLoaded lazyLoadError",function(a,b,c,d){e.setBackground(c)})},afterSlick:function(b,c){var d=this,e=b.slick("getSlick"),f=a(".js-media--ratio",b);b.parent().on("click.slick.load",".slick-down",function(b){b.preventDefault();var d=a(this);a("html, body").stop().animate({scrollTop:a(d.data("target")).offset().top-(d.data("offset")||0)},800,c.easing)}),c.mousewheel&&b.on("mousewheel.slick.load",function(a,c){return a.preventDefault(),c<0?b.slick("slickNext"):b.slick("slickPrev")}),f.length&&(b.trigger("resize"),f.addClass("media--ratio").removeClass("js-media--ratio")),b.trigger("afterSlick",[d,e,e.currentSlide])},setBackground:function(b,c){var d=a(b),e=d.closest(".media--background");d.closest(".media").removeClass("media--loading").addClass("media--loaded"),d.closest(".slide--loading").removeClass("slide--loading"),e.length&&(e.css("background-image","url("+d.attr("src")+")"),e.find("> img").remove(),e.removeAttr("data-lazy"))},randomize:function(a,b){b.randomize&&!a.hasClass("slick-initiliazed")&&a.children().sort(function(){return.5-Math.random()}).each(function(){a.append(this)})},setPosition:function(a,b,c,d){var e=d.slideCount<=c.slidesToShow;if(a.attr("id")===d.$slider.attr("id"))return c.centerPadding&&"0"!==c.centerPadding||d.$list.css("padding",""),e&&d.$slideTrack.width()<=d.$slider.width()&&d.$slideTrack.css({left:"",transform:""}),e||c.arrows===!1?b.addClass("element-hidden"):b.removeClass("element-hidden")},globals:function(c,d,e){return{slide:e.slide,lazyLoad:e.lazyLoad,dotsClass:e.dotsClass,rtl:e.rtl,appendDots:".slick__arrow"===e.appendDots?d:e.appendDots||a(c),prevArrow:a(".slick-prev",d),nextArrow:a(".slick-next",d),appendArrows:d,customPaging:function(a,c){var d=a.$slides.eq(c).find("[data-thumb]")||null,f=b.t(d.attr("alt"))||"",g="<img alt='"+f+"' src='"+d.data("thumb")+"'>",h=d.length&&e.dotsClass.indexOf("thumbnail")>0?"<div class='slick-dots__thumbnail'>"+g+"</div>":"";return a.defaults.customPaging(a,c).add(h)}}}}}(jQuery,Drupal);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
