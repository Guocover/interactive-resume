var $people;

var me = {
  direction: 'left',
  init: function() {
    $people = $('#people');
    this.bindEvent();
  },
  bindEvent: function() {
    var self = this;
    $(window).on('page-scroll', function(e, currPosition, distant) {
      console.log(distant);
      if (distant > 0) {
        console.log('right');
        self.move('right');
      } else {
        console.log('left');
        self.move('left');
      }
    });
  },
  move: function(type) {
    if (this.isMoving) {
      return;
    }
    this.direction = type;
    var self = this;
    var top = type === 'left' ? '-200px' : '0';
    this.isMoving = true;
    
    setTimeout(function(){
      $people.css({
        left: '-200px',
        top: top
      });
      setTimeout(function() {
        $people.css({
          left: '-400px',
          top: top
        });
        self.stop();
      }, 200);
    }, 200);
    
  },
  stop: function() {
    $people.css({
      left: 0,
      top: this.direction === 'left' ? '-200px' : '0'
    });
    this.isMoving = false;
  },
  jump: function() {

  }
};