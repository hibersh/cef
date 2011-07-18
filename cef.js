(function ($) {
  
Drupal.behaviors.cef = {
  attach: function (context) {
    $.each(Drupal.settings.cef, function(dependee, dependents) {
      $('[name="'+dependee+'"]').change(function() {
        var value = this.value;
        $.each(dependents, function(dependent, values) {
          $('[name="'+dependent+'"]').closest('.views-exposed-widget').toggle($.inArray(value, values) != -1);
        });
      });
      $('[name="'+dependee+'"]').change();
    });
  }
}

})(jQuery);
