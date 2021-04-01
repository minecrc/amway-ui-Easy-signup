$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  (() => {
    $('.amway-input-area').find('input#phonenumber').each(
        function() {
            $(this).attr('maxlength', 10);
            $(this).keypress(
                function(event)
                {
                    if (event.keyCode == 46 || event.keyCode == 8)
                    {
                    //do nothing
                    }
                    else 
                    {
                        if (event.keyCode < 48 || event.keyCode > 57 ) 
                        {
                            event.preventDefault();	
                        }	
                    }
                });
        }
    );
    $('.amway-input-area').find('input#abo-member-number').each(   
        function() {
            $(this).keypress( function(event) {
                    if (event.keyCode == 46 || event.keyCode == 8)
                    {
                    //do nothing
                    }
                    else 
                    {
                        if (event.keyCode < 48 || event.keyCode > 57 ) 
                        {
                            event.preventDefault();	
                        }	
                    }
                });}
    );
    $('.amway-input-area').find('input#last4digit-id-card').each( 
        function() {
        $(this).keypress( function(event) {
                if (event.keyCode == 46 || event.keyCode == 8)
                {
                //do nothing
                }
                else 
                {
                    if (event.keyCode < 48 || event.keyCode > 57 ) 
                    {
                        event.preventDefault();	
                    }	
                }
            });}    );

    $('.digit-group').find('input').each(function() {
       
        $(this).keypress(function(event)
            {
                if (event.keyCode == 46 || event.keyCode == 8)
                {
                //do nothing
                }
                else 
                {
                    if (event.keyCode < 48 || event.keyCode > 57 ) 
                    {
                        event.preventDefault();	
                    }	
                }
            }
        );
        $(this).on('input','#digit-1', function(e) {
 
            if (e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));

                if (prev.length) {
                    $(prev).select();
                }
            } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));

                if (next.length) {
                    $(next).select();
                } else {
                    if (parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });
  }
  )();

//   OTP Script Render With VUE

  new Vue({
    el: "#vue-otp",
    data: () => ({
      token: "1234" }) });
      
//   OTP Script End Vue