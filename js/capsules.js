//carousel de photos
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(e) {
        element.innerHTML += 
        `<div class="content m-auto">
            <div class="card m-auto mt-3 align-item-center">
                <a class="text-decoration-none" href=${e.linkPrestashop}>
                    <div class="cardImage">
                        <p class="newProduct text-white rounded pt-1 pb-1 me-2 ms-2">NOUVEAU PRODUIT</p>
                        <img src="${e.link}" alt="${e.alt}">
                    </div>
                    <h3 class="styleH3 pt-2">${e.h3}<h3>
                    <p class="price">${e.price}€</p>
                </a>
            </div>
        </div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: false,
        speed:1500,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4,
                }
           },
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
             }
         ]
    });
  }
  
carousel(".carousel", capsulesProps);
carousel(".secondCarousel", capsulesGener);
