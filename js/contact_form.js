$(function(){
  var form = $("#ajax-contact")
  var submit_form = $("#submit_form")
  var formMessages = $("#form-messages")

  $(submit_form).on("click", function(e){
    e.preventDefault()
    var formData = $(form).serialize();
    $.ajax({
      type: 'POST',
      url: "https://youthradio.org/innovationlab/double-charged-app/mailer.php",
      data: formData
    }).done(function(response) {
      console.log(response)
    // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success');

    // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    }).fail(function(data) {
      console.log(response)
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger');

      // Set the message text.
      if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
      } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
      });
  })
})