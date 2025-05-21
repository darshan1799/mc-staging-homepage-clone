import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function ClientSection() {
  return (
    <>
      <section className="client-full sm:h-[720px] lg:h-[550px] w-full mt-24 bg-blue-300 bg-client-bg bg-cover bg-no-repeat bg-center px-3 py-8 sm:px-4 sm:py-11 lg:px-12 lg:py-20">
        <div
          className="client-home h-auto
         bg-white w-full p-8 grid grid-cols-1 lg:grid-cols-3 items-start "
        >
          <div className="client-img flex lg:justify-start justify-center">
            <img
              src="asset 14.jpeg"
              alt=""
              srcset=""
              className="h-[330px] xsm:min-w-[330px] shadow-sm shadow-gray-200 "
            />
          </div>
          <div className=" sm:px-12 client-slider before:block before:w-full before:bg-center before:bg-no-repeat before:h-11   before:bg-client-dots flex flex-col justify-center items-center col-span-2 text-center mt-10">
            <Swiper className="Client-Home-Slider w-full" loop={true}>
              <SwiperSlide>
                <p className="font-d text-[17.6px] text-gray-600 mt-2  italic text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque velit non rem sed debitis perferendis fugiat ullam,
                  quia nulla dolores, ipsum facere id sapiente in minima quod
                  fugit ipsam doloribus!
                </p>
                <h2 className="mt-3 font-d font-semibold italic">
                  Darshan Sutariya, Verified Buyer
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p className="font-d text-[17.6px] text-gray-600 mt-2  italic text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque velit non rem sed debitis perferendis fugiat ullam,
                  quia nulla dolores, ipsum facere id sapiente in minima quod
                  fugit ipsam doloribus!
                </p>
                <h2 className="mt-3 font-d font-semibold italic">
                  Darshan Sutariya1
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p className="font-d text-[17.6px] text-gray-600 mt-2  italic text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque velit non rem sed debitis perferendis fugiat ullam,
                  quia nulla dolores, ipsum facere id sapiente in minima quod
                  fugit ipsam doloribus!
                </p>
                <h2 className="mt-3 font-d font-semibold italic">
                  Darshan3 Sutariya
                </h2>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <p className="font-d text-[17.6px] text-gray-600 mt-2  italic text-center">
                  Loremd ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque velit non rem sed debitis perferendis fugiat ullam,
                  quia nulla dolores, ipsum facere id sapiente in minima quod
                  fugit ipsam doloribus!
                </p>
                <h2 className="mt-5 font-d font-semibold italic">
                  Darshan Sutara
                </h2>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
export default ClientSection;
