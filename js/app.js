/**
 * 移动简历
 */
var $window = $(window)
var $loading = $('#loading');
var $content = $('#content');
var currPosition = 0;
var prePosition = 0;

var Resume = {
  init: function() {
    var self = this;
    scense.init();
    me.init();
    setTimeout(function() {
      self.stopLoading();
      self.bindEvent();
    }, 4000);
    
  },
  stopLoading() {
    $loading.slideUp();
  },
  bindEvent: function() {
    // 滚动
    $window.on('scroll', function(e) {
      currPosition =  $window.scrollTop();
      console.log(currPosition, prePosition);
      // 移动距离
      var distant	 = currPosition - prePosition;

      $window.trigger('page-scroll', [currPosition, distant]);
      prePosition = currPosition;
    });

    $content.on('click', '.js-start-resume', function() {
      $content.css({
        'overflow-y': 'scroll',
        'height': 'auto'
      });
      $(".my-info").fadeOut(800);
      $(".info_tip").fadeIn(500);
    });
  }
};

// 页面初始化
Resume.init();