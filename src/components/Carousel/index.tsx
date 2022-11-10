import React, { useEffect } from "react";
import { ContainerCarousel, Wrapper, Scene, Slide } from "./style";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;

    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
  });

  slider.on("detailsChanged", () => {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  });
};

const Carousel: React.FC = () => {
  const animation = { duration: 20000, easing: (t: number) => t };
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      drag: false,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    [carousel]
  );

  const listSlidesImage = [
    "/assets/product-1.png",
    "/assets/product-2.png",
    "/assets/product-3.png",
    "/assets/product-4.png",
    "/assets/product-5.png",
    "/assets/product-6.png",
  ];

  return (
    <>
      <ContainerCarousel>
        <Wrapper>
          <Scene>
            <div className="carousel keen-slider" ref={sliderRef}>
              {listSlidesImage.map((image: string, index: number) => {
                return (
                  <>
                    <Slide
                      key={image}
                      backgroundCarousel={image}
                      className="carousel__cell"
                    />
                  </>
                );
              })}
            </div>
          </Scene>
        </Wrapper>
      </ContainerCarousel>
    </>
  );
};

export default Carousel;
