var $scenseHorizontal;
var $scenseVertical;

var scense = {
  init: function() {
    $scenseHorizontal = $('.layer-horizontal');
    $scenseVertical = $('.layer-vertical');
    this.bindEvent();
  },
  bindEvent: function() {
    var self = this;
    $(window).on('page-scroll', function(e, currPosition, distant) {
      self.moveHorizontal(currPosition);
    });
  },
  moveHorizontal: function(distant) {
    $scenseHorizontal.css({
      left: -distant
    });
    
  },
 
};