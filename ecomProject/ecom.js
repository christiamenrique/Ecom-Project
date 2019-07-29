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

