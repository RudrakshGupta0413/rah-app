/* eslint-disable @next/next/no-img-element */

import OrderNow from "./OrderNow";

type PriceListItem = {
  size: string;
  price: string | number;
};

type ServiceDetailsProps = {
  title: string;
  images: string[];
  priceList: PriceListItem[];
  isCustomGrid?: boolean;
};

const ServiceDetails = ({
  title,
  images,
  priceList,
  isCustomGrid,
}: ServiceDetailsProps) => {
  return (
    <div className="px-4 py-8 md:px-12 md:py-16 lg:px-24 text-[#4b4b4b]"> 
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-[#674D51] font-bold font-sriracha mb-6 pt-8 pb-4 text-center leading-20 tracking-wider">
        {title.split(" ").slice(0, -1).join(" ")} <br />{" "}
        {title.split(" ").slice(-1)}
      </h1>

      {isCustomGrid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 place-items-center">
          {images.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Image ${i + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-16 lg:gap-20 mb-10"> 
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sample ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </div>
        
      )}

      <div className="relative border-2 border-[#4D312B] rounded-xl p-6 max-w-5xl mx-auto bg-white/80 overflow-hidden shadow-2xl">
        {/* Background Logo Image */}
        <img
          src="/Logo.png" 
          alt="RAH Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-10 z-0"
        />

        {/* Foreground Content */}
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl md:text-4xl sm:text-4xl mb-4 text-center font-sister text-[#4D312B]">
            Price List
          </h2>
          <ul className="text-base sm:text-lg text-left px-4 py-6 sm:px-10 sm:py-10 text-[#4D312B]"> 
            {priceList.map((item, i) => (
              <li key={i} className="flex justify-between py-1 px-2 sm:px-4">
                <span>{item.size}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10"> {/* Added margin top for spacing */}
        <OrderNow />
      </div>
    </div>
  );
};

export default ServiceDetails;