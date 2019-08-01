// Searching by name function
function productSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("prodInput");
    filter = input.value;
    ul = document.getElementById("productGrid");
    li = ul.getElementsByClassName("col-4");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().includes(filter.toLowerCase())) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Searching by price function
function filterPrice() {
  // Get filter values
  var checkBoxOne = document.getElementById("lowerPrice").checked;
  var checkBoxTwo = document.getElementById("higherPrice").checked;
  // Get Products as array
  var productGrid = document.getElementById("productGrid");
  var products = Array.from(productGrid.getElementsByClassName("col-4"));
  // Apply filters to products array
  products.forEach(product => {
  var price = product.getElementsByClassName("priceAmount")[0].innerHTML;

   if (checkBoxOne && price > 300) {
    console.log('hiding:', product)
    product.style.display = 'none';
   }
   if (checkBoxTwo && price > 500) {
    console.log('hiding:', product)
    product.style.display = 'none';
   }
     });
}

// form function 
$("#contactForm").validate({
    rules: {
        name: "required",
        password: {
            required: true,
            minlength: 5
        },
        confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        email: {
            required: true,
            email: true
        },
    },
        messages: {
        name: "Please enter your name!",
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirm_password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Please enter the same password as above"
        },
        email: "Please enter a valid email address",
        agree: "Please accept our policy"
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
        error.addClass( "help-block" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.parent( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).parents( "p" ).addClass( "has-error" ).removeClass( "has-success" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).parents( "p" ).addClass( "has-success" ).removeClass( "has-error" );
}
});





//  $(document).ready(function() {
//      $( 'slideLeft' ).on('click',function(){
//         var currentImg = $('.active');
//         var nextImg = currentImg.next()
//         if(nextImg.lengh){
//             currentImg.removeClass('active').css('z-indez', -10);
//             nextImg.addClass('active').css('z-index', 10)
//         }
//      });
//  });



    

 