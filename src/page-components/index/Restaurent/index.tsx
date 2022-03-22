import Card from "../../../shared/UIKIT/Card";
import { homeRestaurentPropType } from "./type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss";

function Restaurent({
  restaurents,
}: {
  restaurents: homeRestaurentPropType[];
}) {
  return (
    <section className="restaurents">
      <h2>Restaurants Near You</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {restaurents.map((e: homeRestaurentPropType) => (
          <SwiperSlide key={e._id}>
            <Card
              size="medium"
              key={e._id}
              link={"/e.link"}
              img={e.img}
              title={e.title}
            ></Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onInit={(e) => console.log(e)}
        onSwiper={(swiper) => console.log(swiper)}
      ></Swiper>
    </section>
  );
}
export default Restaurent;
