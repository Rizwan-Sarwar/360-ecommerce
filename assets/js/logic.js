var body = document.querySelector("body");
// nav toggle
const navToggle = () => {
        let menu = document.getElementById("mobile__navbar");
        if (menu.style.width === "0%" || menu.style.width === '') {
            menu.style.width = "100%";
            body.classList.add('overflow__hidden');
        } else {
            menu.style.width = "0%"
            body.classList.remove('overflow__hidden');
        }

    }
    // nav dropdown
let mobile__MenuBtn = document.querySelectorAll(".responsive__menuBtn");
mobile__MenuBtn.forEach(elem => {
        elem.addEventListener('click', (btn) => {
            let btn__wrap = btn.path[1]
            let dropdown = btn__wrap.querySelector('.dropdown');
            if (dropdown !== null) {
                dropdown.style.left = 0;
            }
        });
    })
    // nav dropdown preview
let preview__MenuBtn = document.querySelectorAll(".preview__menuBtn");
preview__MenuBtn.forEach(preview => {
        preview.addEventListener('click', (btn) => {
            let dropdown = btn.currentTarget.parentElement.parentElement.parentElement;
            dropdown.style.left = "100%";
        });
    })
    // product filter
    // let filter__btn = document.querySelector(".filter__btn");
    // filter__btn.addEventListener("click", filter__option)
let filter__option = () => {
    let layer = document.querySelector(".black__layer");
    let filter = document.querySelector(".filter__by");
    if (filter.classList.contains("right__0percent")) {
        filter.classList.remove("right__0percent")
        layer.classList.remove("width__100percent")
        body.classList.remove('overflow__hidden');
    } else {
        filter.classList.add("right__0percent")
        layer.classList.add("width__100percent")
        body.classList.add('overflow__hidden');
    }
}

// custom tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// product qunatity 
const productQuantity__Fuc = (btn) => {
        let productQunatity = Number(document.getElementById("product__quantity").value);
        if (productQunatity > 0) {
            if (btn.classList.contains("add")) {
                document.getElementById("product__quantity").value = productQunatity + 1
            } else {
                document.getElementById("product__quantity").value = productQunatity + -1
            }
        } else {
            document.getElementById("product__quantity").value = 1
        }
    }
    // search bar toggle
$(document).ready(function() {
    $(".searchbar__icon").click(function() {
        $(".searchbar__toggle").animate({
            height: 'toggle'
        });
    });
});