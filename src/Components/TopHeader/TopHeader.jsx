import { GrLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

function TopHeader() {
  return (
    <>
      <div className="px-12 bg-blue-950 text-white w-full h-10  gap-10 items-center text-sm hidden xl:flex">
        <span className="flex font-d items-center gap-2">
          <GrLocation className="text-sm" />
          Store Location
        </span>
        <span className="flex font-d items-center gap-2">
          <TbTruckDelivery className="text-xl" />
          Order Tracking
        </span>
      </div>
    </>
  );
}
export default TopHeader;
