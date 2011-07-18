(function ($) {
  
Drupal.behaviors.cef = {
  attach: function (context) {
    $.each(Drupal.settings.cef, function(dependee, dependents) {
      $('[name="'+dependee+'"]').change(function() {
        var value = this.value;
        $.each(dependents, function(dependent, dvalue) {
          $('[name="'+dependent+'"]').closest('.views-exposed-widget').toggle(dvalue == value);
        });
      });
      $('[name="'+dependee+'"]').change();
    });
  }
}

})(jQuery);
