import { FaRegFaceSmileWink } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
function Aboutpage() {
  return (
    <>
      <section className="about-page w-full h-auto sm:h-[719px] lg:h-[405px] mb-16 lg:mt-28 lg:mb-28">
        <div className="about-home w-full h-full grid grid-cols-1  lg:grid-cols-3 px-5 lg:px-12">
          <div className="about-home-content flex flex-col gap-2 py-11 pr-3 lg:pr-8 justify-center">
            <div className="text-d text-[17.6px] text-gray-500">
              Who We Are?
            </div>
            <h2 className="text-d text-[32px] font-semibold -mt-2">
              About Us Camera Pro
            </h2>
            <p>
              <strong className="text-[16.8px] text-gray-500 leading-3 ">
                There are many variations of passages lorem available, but
                reproduced below for those interested.
              </strong>
            </p>
            <p className="text-[14px] text-gray-500">
              Sed perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              inventore veritatis quasi architecto beatae explicabo.
            </p>
            <div className="about-btn mt-6">
              <button className="bg-red-800 text-white px-12 py-3 rounded-sm   ">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-2 md:gap-10">
            <div className="about-home-img flex items-start w-full">
              <img
                src="asset 15.jpeg"
                alt=""
                className="lg:pl-3 w-full h-auto lg:w-auto lg:h-auto"
              />
            </div>
            <div className=" px-4">
              <div className=" h-full w-full pt-16 pl-8 xl:pl-10 pb-8 flex flex-col gap-12 ">
                <div className="container flex h-[76px] w-full gap-4 ">
                  <div className="about-icon h-full flex items-center">
                    <FaRegFaceSmileWink className="text-5xl text-red-900" />
                  </div>
                  <div className="about-sub-content h-full flex flex-col justify-center">
                    <h1 className="text-[20px] font-semibold font-d">
                      Happy Clients
                    </h1>
                    <p className="text-[14px] font-d text-gray-500">
                      We accept and sell all kinds of photo gear. Film, Digital,
                      and more!
                    </p>
                  </div>
                </div>
                <div className="container flex h-[76px] w-full gap-4">
                  <div className="about-icon h-full flex items-center">
                    <TbTruckDelivery className="text-5xl text-red-900" />
                  </div>
                  <div className="about-sub-content h-full flex flex-col justify-center">
                    <h1 className="text-[20px] font-semibold font-d">
                      Fast Shipping
                    </h1>
                    <p className="text-[14px] font-d text-gray-500">
                      We love our customers and ensure they are satisfied with
                      their gear.
                    </p>
                  </div>
                </div>
                <div className="container flex h-[76px] w-full gap-4">
                  <div className="about-icon h-full flex items-center">
                    <FaRegHeart className="text-5xl text-red-900" />
                  </div>
                  <div className="about-sub-content h-full flex flex-col justify-center">
                    <h1 className="text-[20px] font-semibold font-d">
                      Quality Inventory
                    </h1>
                    <p className="text-[14px] font-d text-gray-500">
                      Canon, Nikon, Leica... we have it all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Aboutpage;
