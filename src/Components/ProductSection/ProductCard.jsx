import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GrCompare } from "react-icons/gr";
import { GrExpand } from "react-icons/gr";
import { useState } from "react";
import { TbCapture } from "react-icons/tb";
import { MdCollections } from "react-icons/md";
import { PiDotsThree } from "react-icons/pi";

function ProductCard({ Product }) {
  const [showIcons, setshowIcons] = useState(false);
  const [showCapturIcon, setCaptureIcon] = useState(false);
  return (
    <>
      <div
        className="product-card rounded-md lg:h-[430px] w-full text-center "
        onMouseEnter={() => {
          setshowIcons(true);
        }}
        onMouseLeave={() => {
          setshowIcons(false);
        }}
      >
        <div
          className={`flex hover:opacity-100 flex-col gap-1 opacity-0  relative top-[7.9rem] -mt-[7.4rem] float-right right-2 ${
            showIcons && " opacity-60 transition-all"
          } `}
        >
          <div
            className="bg-white h-8 w-8 flex gap-1 justify-center items-center rounded-full hover:cursor-pointer"
            onMouseEnter={() => {
              setCaptureIcon(true);
            }}
            onMouseLeave={() => {
              setCaptureIcon(false);
            }}
          >
            <TbCapture className="text-xl  text-blue-600" />
          </div>
          <div
            className={`flex flex-col gap-1  opacity-0 ${
              showCapturIcon && "opacity-100 transition-all"
            }`}
            onMouseEnter={() => {
              setCaptureIcon(true);
            }}
            onMouseLeave={() => {
              setCaptureIcon(false);
            }}
          >
            <div className="bg-white h-8 w-8 flex justify-center items-center rounded-full opacity-60 hover:opacity-100 hover:cursor-pointer">
              <MdCollections className="text-xl text-blue-600" />
            </div>
            <div className="bg-white h-8 w-8 flex justify-center items-center rounded-full opacity-60 hover:opacity-100 hover:cursor-pointer">
              <PiDotsThree className="text-xl  text-blue-600" />
            </div>
          </div>
        </div>
        <img
          src={"asset 5.jpeg"}
          className=" lg:h-80 rounded-md mb-2 sm:h-[224px] w-full"
        />

        <div
          className={`flex gap-3  justify-center  opacity-0  w-full -mb-10 ${
            showIcons && "-translate-y-16 opacity-100 transition"
          }`}
        >
          <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full  hover:cursor-pointer hover:bg-blue-950 hover:text-white">
            <IoBagOutline className="text-xl" />
          </div>
          <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full  hover:cursor-pointer hover:bg-blue-950 hover:text-white">
            <CiHeart className="text-xl" />
          </div>
          <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full  hover:cursor-pointer hover:bg-blue-950 hover:text-white">
            <GrCompare className="text-xl" />
          </div>
          <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-blue-950 hover:text-white">
            <GrExpand className="text-xl" />
          </div>
        </div>
        <a
          className="text-base block overflow-hidden  whitespace-nowrap overflow-ellipsis"
          href=""
        >
          {Product.name}
        </a>
        <p className="text-lg font-semibold text-red-900 ">${Product.price}</p>
      </div>
    </>
  );
}
export default ProductCard;
