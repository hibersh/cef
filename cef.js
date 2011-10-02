Drupal.behaviors.cef = function (context) {
    $.each(Drupal.settings.cef, function(dependee, dependents) {
      $('[name="'+dependee+'"]').change(function() {
        $(this).closest('.views-exposed-widget').addClass('dependee');
        var value = this.value;
        $.each(dependents, function(dependent, values) {
          $('[name="'+dependent+'"]').closest('.views-exposed-widget').addClass('dependent');
          if (value in values) {
            $('[name="'+dependent+'"]').closest('.views-exposed-widget').show();
          } else {
            $('[name="'+dependent+'"]').closest('.views-exposed-widget').hide();
          }
        });
      });
      $('[name="'+dependee+'"]').change();
    });
    $('.dependee').wrapAll('<div class="views-exposed-widgets dependee" />');
    $('.dependent').wrapAll('<div class="views-exposed-widgets dependent" />');
    $('.views-exposed-widget:not(.dependee,.dependent)').wrapAll('<div class="views-exposed-widgets other" />');
    $.each($('.views-exposed-widget .form-select'), function() {
      if ($("label[for='"+this.id+"']").text()) {
        this.options[0].text = $("label[for='"+this.id+"']").text();
        $("label[for='"+this.id+"']").remove();        
      }
    });
};

