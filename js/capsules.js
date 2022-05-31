//carousel de photos
function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(e) {
        element.innerHTML += 
        `<div class="content">
            <div class="card">
                <a href="#">
                    <span>NOUVEAU PRODUIT</span>
                    <div class="cardImage">
                        <img src="${e.link}" alt="${e.alt}">
                    </div>
                    <h3 class="styleH3">${e.h3}<h3>
                    <p class="price">${e.price}</p>
                </a>
            </div>
        </div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: false,
        speed:1300,
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
                    slidesToShow: 5
                }
           },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
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
