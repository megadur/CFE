//alert('xxx');
/* */
//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
$('.pull-down').each(function() {
    var $this = $(this);
    $this.css('margin-top', $this.parent().height() - $this.height())
  });
  
  $(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
      if ($('.sidebar-offcanvas').css('background-color') == 'rgb(255, 255, 255)') {
        $('.list-group-item').attr('tabindex', '-1');
      } else {
        $('.list-group-item').attr('tabindex', '');
      }
      $('.row-offcanvas').toggleClass('active');
      
    });
  });
  