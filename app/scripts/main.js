// jshint devel:true

$('#masthead .call-to-action').on('click', function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      scrollTarget: link.hash
    });
    return false;
  });


var theater = new TheaterJS();
theater.describe("Problem", { speed: 1, accuracy: 1}, "#typer");
theater //.write( "Problem:Deliver a memorable wedding speech", 3000)
        .write("Problem:Inspire your new team at work", 3000)
        .write("Problem:Nail that job interview", 3000)
        .write("Problem:Improve networking abilities", 3000)
        .write("Problem:No longer be the quiet one", 3000)
        .write(function () { theater.play(true); });


// http://stackoverflow.com/questions/29810100/ajax-javascript-post-to-google-spreadsheet-without-jquery
$('#register-interest-form').submit(function(e){
   e.preventDefault();
   var email = $('#register-email').val()
   if (email != ''){
     $('#register-email').attr('placeholder', 'Thankyou!');
     $('#register-email').val('');
     $.ajax({
        url: 'https://docs.google.com/forms/d/1MsPOgptLrb8vAeU56gjXits3qCeAyYoKKPnb9IrljhM/formResponse',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: 'POST',
        data: {
          'entry.2088639796': email
        }
     }).done(function(data){
     }).fail(function(data){
        // note: fail always calls because of XMLHttpRequest error but form still submits
     });
   }

  return false;
});

