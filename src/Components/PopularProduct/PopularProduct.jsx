import ProductList from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


function PopularProduct() {
  const Products = [
    {
      imgid: 1,
      imgsrc: "",
      name: "Canon RF 50mm f/1.8 STM Lens",
      price: "120.00",
    },
    { imgid: 1, imgsrc: "", name: "test", price: "340.00" },
    {
      imgid: 1,
      imgsrc: "",
      name: "Rokinon Xeen 85mm T1.5 Lens Canon EF Mount",
      price: "210.00",
    },
    {
      imgid: 1,
      imgsrc: "",
      name: "Sigma AF 17-70mm f/2.8-4.5 DC Macro HSM Lens Sony/Minolta",
      price: "111.00",
    },
  ];
  return (
    <>
      <section className="PopularProduct mt-20 h-full lg:h-[371px] xl:h-[384px] flex flex-col lg:flex-row px-5 lg:px-12 gap-6 ">
        <img
          src="asset 10.jpeg"
          alt=""
          className=" hidden lg:inline-block lg:w-[70px] lg:h-full xl:h-[371px] xl:w-24"
        />
        <strong className="lg:hidden text-3xl font-medium font-d text-center">
          POPULAR PRODUCTS
        </strong>

        <section className="hidden lg:grid grid-cols-4 gap-4 h-[292px] ">
          {Products.map((Product) => {
            return <ProductList Product={Product} />;
          })}
        </section>
        <section className="lg:hidden w-full  lg:h-[332px] ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="PopularProductSlider h-full "
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {Products.map((Product) => {
              return (
                <SwiperSlide>
                  <ProductList Product={Product} key={Product.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </>
  );
}
export default PopularProduct;
