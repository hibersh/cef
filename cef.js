Drupal.behaviors.cef = function (context) {
    $.each(Drupal.settings.cef, function(dependee, dependents) {
      $('[name="'+dependee+'"]').change(function() {
        $(this).closest('.views-exposed-widget').addClass('dependee');
        var value = this.value;
        $.each(dependents, function(dependent, values) {
          $('[name="'+dependent+'"]').closest('.views-exposed-widget').toggle(value in values).addClass('dependent');
        });
      });
      $('[name="'+dependee+'"]').change();
    });
    $('.dependee').wrapAll('<div class="views-exposed-widgets dependee" />');
    $('.dependent').wrapAll('<div class="views-exposed-widgets dependent" />');
    $('.views-exposed-widget:not(.dependee,.dependent)').wrapAll('<div class="views-exposed-widgets other" />');
    $.each($('.views-exposed-widget .form-select'), function() {
      $(this).get(0).options[0].text = $(this).closest('.views-exposed-widget').children('label').text();
      $(this).closest('.views-exposed-widget').children('label').remove();
    });
}
