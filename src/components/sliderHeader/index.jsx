import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./index.css";


const REACT_API_SLIDERS = 'https://6744a6fdb4e2e04abea31a7f.mockapi.io/systemCards'; 

function Carousel() {
  const [slidersProducts, setSlidersProducts] = useState({ items: [] });

  useEffect(() => {
    fetch(REACT_API_SLIDERS)
      .then(response => response.json())
      .then(data => setSlidersProducts({ items: data }))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <div className="carousel-container">
      <Splide aria-label="banner_slider" className="carousel">
        {slidersProducts.items.map((item, index) => (
          <SplideSlide key={index}>
            <div className="container_slider_block">
              <div
                className="slide_banner"
                id="slide_list_block"
                role="panelSliderProduct"
              >
                <h1 key={item.id} className="title_product">
                  {item.title} <b>{item.postfix}</b>
                </h1>
                <p className="description_product">
                  {item.descrip}
                </p>
                <button className="button_shop">Shop Now</button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Carousel;