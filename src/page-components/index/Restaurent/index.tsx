import Card from "../../../shared/UIKIT/Card";
import { homeRestaurentPropType } from "./type";
import { RESTAURENT } from "../../../const/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./index.scss";

function Restaurent({
  restaurents,
}: {
  restaurents: homeRestaurentPropType[] | null;
}) {
  return (
    <section className="restaurents">
      <h2>Restaurants Near You</h2>
      {restaurents === null ? (
        "loading..."
      ) : (
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
                slug={`${RESTAURENT}${e.link}`}
                img={e.img}
                name={e.name}
              ></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
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
