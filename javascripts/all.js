// This is where it all goes :)
$(function () {

  var $grammarArticle = $("#grammar-article"),
      $artistCta = $("#artist-cta"),
      $individualCta = $("#individual-cta"),
      $nonProfitCta = $("#non-profit-cta"),
      ctaArr = [$artistCta, $individualCta, $nonProfitCta];
      
  
  $('select').material_select();

  $('#newsletter-signup').submit(function (event) {
    event.preventDefault();
    if ($("#email").val().indexOf('@') === -1)
      return;

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
      $("#submit-email").replaceWith("<p style='color:#1d4c76; text-align: center;'>Thanks for subscribing. We'll keep in touch.</p>")
    });
  });


  $("#user-type select").change(function () {
    var $selection = $(this).val();
    
    if ($selection === "non profit"){
      $grammarArticle.hide();
      displaySingleCta($nonProfitCta, ctaArr);
    }
    else{
      $grammarArticle.show();
    }
    if ($selection === "artist"){
      displaySingleCta($artistCta, ctaArr);
    }
    if ($selection === "individual"){
      displaySingleCta($individualCta, ctaArr);
    }
  })
  
  function displaySingleCta($cta, ctaArr){
    for (var i = 0; i < ctaArr.length; i++){
      if (ctaArr[i] !== $cta){
        $(ctaArr[i]).hide();
      } else {
        $(ctaArr[i]).show();
      }
    }
  }
});