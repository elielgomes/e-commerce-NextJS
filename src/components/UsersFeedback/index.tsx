import {
  ContainerSwiper,
  ContainerCardFeedback,
  ContainerFeedback,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const UsersFeedback = () => {
  const userTestimonials = [
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png",
      name: "Matheus Silva",
      depositions:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Sint iusto qui, vitae voluptatum iure voluptate fuga autem nihil delectus cumque unde quasi esse reiciendis corrupti deserunt cupiditate ex veritatis sapiente.",
    },
  ];

  return (
    <>
      <ContainerSwiper>
        <ContainerFeedback>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {userTestimonials.map((user, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <ContainerCardFeedback>
                      <div className="card">
                        <p>{user.depositions}</p>
                      </div>
                      <div className="userInfos">
                        <img
                          src={user.image}
                          alt="test"
                        />
                        <h3>{user.name}</h3>
                      </div>
                    </ContainerCardFeedback>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </ContainerFeedback>
      </ContainerSwiper>
    </>
  );
};

export default UsersFeedback;
