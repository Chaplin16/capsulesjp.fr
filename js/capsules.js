//carousel de photos
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(e) {
        element.innerHTML += 
        `<div class="content m-auto">
            <div class="card m-auto mt-3 align-item-center" style="width:10rem; height:26rem;">
                <a class="text-decoration-none" href=${e.linkPrestashop}>
                    <div class="cardImage mt-2" style="height:350px;">
                        <h3 class="newProduct text-dark fw-bold rounded pt-1 pb-1 me-2 ms-2">NOUVEAU PRODUIT</h3>
                        <img style="width:180px;" src="${e.link}" alt="${e.alt}">
                    </div>
                    <h4 class="styleH3 pt-2">${e.h3}<h4>
                    <span class="price">${e.price}€</span>
                </a>
            </div>
        </div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
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
            },
            {
                breakpoint: 450,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
             }
         ]
    });
  }
  
carousel(".carousel", capsulesProps);
carousel(".secondCarousel", capsulesGener);
