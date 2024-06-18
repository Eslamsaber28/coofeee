
// search input
let search = document. querySelector('.search-box');
document.querySelector("#search-icon").onclick = () =>{
    search.classList.toggle("active");
}

// search input end

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
       });
});
});

let header = document.querySelector("header")

window.addEventListener('scroll',() =>{
    header.classList.toggle("shadow", window.scrollY > 0);
} );
