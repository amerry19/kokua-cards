// This is where it all goes :)
$(function () {

  var $grammarArticle = $("#grammar-article");
  
  $('select').material_select();

  $('#newsletter-signup').submit(function (event) {
    event.preventDefault();

    var formEl = $(this);
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function () {
        submitButton.prop('disabled', 'disabled');
      }
    }).done(function (data) {
      submitButton.prop('disabled', false);
      console.log(data)
    });
  });


  $("#user-type select").change(function () {

    if ($(this).val() == "non profit")
      $grammarArticle.hide();
    else
      $grammarArticle.show();
  })
});

