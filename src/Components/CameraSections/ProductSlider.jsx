import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function ProductSlider() {
  const imgUrl = [
    {
      imgUrl: "asset 6.jpeg",
      heading: "Lorem ipsum dolor sit amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis totam molestias voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
    },
    {
      imgUrl: "asset 7.jpeg",
      heading: "Lorem ipsum  amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis  voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
    },
    {
      imgUrl: "asset 8.jpeg",
      heading: "Lorem ipsum dolor sit amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis totam molestias voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
    },
    {
      imgUrl: "asset 9.jpeg",
      heading: "Lorem ipsum dolor sit amet consectetur",
      content: "",
    },
  ];
  return (
    <>
      <section className="h-[218px] xl:h-[35rem] mt-20 xsm:h-[290px] sm:h-[524px] lg:h-[560px]">
        <Swiper
          loop={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={40}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          className="ProductSection h-full w-full active:cursor-pointer"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {imgUrl.map((url) => {
            return (
              <SwiperSlide>
                <img src={url.imgUrl} alt="" className=" w-full h-full" />
                <div className="absolute bottom-1 w-full p-8 ">
                  <div className="bg-[rgba(255,255,255,0.9)]  p-5  flex  items-center justify-between rounded-lg ">
                    <div>
                      <h1 className="font-d font-semibold text-red-800 text-base sm:text-xl">
                        {url.heading}
                      </h1>
                      <p className=" hidden  sm:block  w-[80%] text-sm text-gray-500">
                        {url.content}
                      </p>
                    </div>
                    <div className="h-full flex items-center">
                      <button className="bg-red-800 px-2 py-1 sm:px-6 sm:py-3  text-white border-none rounded   font-bold">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
export default ProductSlider;
