import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

function HeroSection() {
  // const imageUrl = ["asset 2.jpeg", "asset 3.jpeg", "asset 4.jpeg"];
  const imageUrl = [
    {
      imgUrl: "asset 2.jpeg",
      heading: "Lorem ipsum dolor sit amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis totam molestias voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
      buttonText: "Sell Gear",
    },
    {
      imgUrl: "asset 3.jpeg",
      heading: "Lorem ipsum  amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis  voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
      buttonText: "Explore Products",
    },
    {
      imgUrl: "asset 4.jpeg",
      heading: "Lorem ipsum dolor sit amet consectetur",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores tenetur nam sapiente fugit reiciendis totam molestias voluptatibus! Voluptates eligendi accusamus a tempore dolore harum quae quaerat at ea iste.",
      buttonText: "Events",
    },
  ];
  //animation

  return (
    <>
      <div className="hero-section w-full xl:h-[525px]  ">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="heroSectionslider"
        >
          {imageUrl.map((url, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <div>
                    <img
                      src={url.imgUrl}
                      className="w-full h-full px-[0.4px] "
                    />

                    <div className="px-5 xl:px-12 dk-content relative bottom-[6rem] sm:bottom-[13rem] lg:bottom-[20rem] w-[67%] xsm:w-[60%] xsm:bottom-[8rem] sm:w-[70%] xl:bottom-[430px] text-white xl:w-[43%] h-0">
                      <h1 className="sm:text-4xl lg:text-5xl font-d font-bold">
                        {url.heading}
                      </h1>
                      <p className=" hidden lg:block mt-2 xl:mt-5 w-[80%] text-[1.10rem]">
                        {url.content}
                      </p>
                      <button className="mt-2 sm:mt-4 xl:mt-8 bg-red-800 text-white border-none rounded py-1 px-3 text-base sm:py-2 sm:px-3 sm:text-xl font-bold z-1">
                        {url.buttonText}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
export default HeroSection;

{
  /* <div className="dot-icons relative bottom-10 flex justify-center gap-2">
<RxDotFilled
  className={` text-white  hover:border-2 border-2 border-white rounded-lg
    }`}
/>
<RxDotFilled
  className={` text-white  hover:border-2 border-2 border-white rounded-lg
    }`}
/>
<RxDotFilled
  className={` text-white  hover:border-2 border-2 border-white rounded-lg
  }`}
/>
</div> */
}
