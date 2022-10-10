/**
 * Simple Load More
 *
 * Version: 1.0.2
 * Author: Zeshan Ahmed
 * Website: https://zeshanahmed.com/
 * Github: https://github.com/zeshanshani/simple-load-more/
 */
(function($) {
  $.fn.simpleLoadMore = function( options ) {
    // Settings.
    var settings = $.extend({
      count: 2,
      btnHTML: '',
      item: ''
    }, options);

    // Variables
    var $loadMore = $(this);

    // Run through all the elements.
    $loadMore.each(function(i, el) {

      // Variables.
      var $thisLoadMore = $(this);
      var $items        = $thisLoadMore.find(settings.item);
      var btnHTML       = settings.btnHTML ? settings.btnHTML : '<div class="load-more__btn">加载更多</div>';
      var $btnHTML      = $(btnHTML);

      // Add classes
      $thisLoadMore.addClass('load-more');
      $items.addClass('load-more__item');

      // Add button.
      if ( ! $thisLoadMore.find( '.load-more__btn' ).length && $items.length > settings.count ) {
        $thisLoadMore.append( $btnHTML );
      }

      $btn = $thisLoadMore.find( '.load-more__btn' );

      // Check if button is not present. If not, then attach $btnHTML to the $btn variable.
      if ( ! $btn.length ) {
        $btn = $btnHTML;
      }

      if ( $items.length > settings.count ) {
        $items.slice(settings.count).hide();
      }

      // Add click event on button.
      $btn.on('click', function(e) {
        setTimeout(function(){
          $(".load-more__btn").html("加载中...");
        },1000,);
        setTimeout(function(){
          $(".load-more__btn").html("加载更多");
          e.preventDefault();
          var $this = $(this),
          $updatedItems = $items.filter(':hidden').slice(0, settings.count);

          // Show the selected elements.
          if ( $updatedItems.length > 0 ) {
            $updatedItems.fadeIn();
          }
          // Hide the 'View More' button
          // if the elements lenght is less than 5.
          if ( $updatedItems.length < settings.count ) {
            $this.remove();
          }
        },2000,);
      });
    });
  }
}( jQuery ));