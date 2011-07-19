(function ($) {
  
Drupal.behaviors.cef = {
  attach: function (context) {
    $.each(Drupal.settings.cef, function(dependee, dependents) {
      $('[name="'+dependee+'"]').change(function() {
        $(this).closest('.views-exposed-widget').addClass('dependee');
        var value = this.value;
        $.each(dependents, function(dependent, values) {
          $('[name="'+dependent+'"]').closest('.views-exposed-widget').toggle($.inArray(value, values) != -1).addClass('dependent');
        });
      });
      $('[name="'+dependee+'"]').change();
    });
    $('.dependee').wrapAll('<div class="views-exposed-widgets dependee" />');
    $('.dependent').wrapAll('<div class="views-exposed-widgets dependent" />');
    $('.views-exposed-widget:not(.dependee,.dependent)').wrapAll('<div class="views-exposed-widgets other" />');
  }
}

})(jQuery);
