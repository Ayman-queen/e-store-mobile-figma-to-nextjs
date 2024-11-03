import React from 'react';
import Image from 'next/image';

const Discount = () => {
  return (
    <div>
      <div className="h-auto px-40 py-20 bg-white flex-col justify-start items-start gap-8 inline-flex max-md:px-5 max-md:py-10">
        <div className="text-center text-black text-2xl font-medium font-['Inter'] leading-loose">
          Discounts up to -50%
        </div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex flex-wrap">
          {[
            {
              img: "/image-4.png",
              title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
              price: "$1437"
            },
            {
              img: "/image-3.png",
              title: "AirPods Max Silver Starlight Aluminium",
              price: "$549"
            },
            {
              img: "/image-2.png",
              title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
              price: "$399"
            },
            {
              img: "/image-1.png",
              title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
              price: "$1499"
            }
          ].map((item, index) => (
            <div key={index} className="grow shrink basis-0 px-4 py-6 bg-[#f6f6f6] rounded-[9px] flex-col justify-start items-center gap-4 inline-flex max-md:w-full">
              <Image className="w-40 h-40" src={item.img} alt={item.title} width={160} height={160} />
              <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch h-[88px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
                    {item.title}
                  </div>
                  <div className="self-stretch text-center text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">
                    {item.price}
                  </div>
                </div>
                <div className="px-16 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-sm font-medium font-['Inter'] leading-normal">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discount;


