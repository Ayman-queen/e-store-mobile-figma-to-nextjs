import React from 'react';
import Image from 'next/image';

import one from "@/popularproduct-1.png";
import one0 from "@/ipadPro.png";
import one1 from "@/samsung.png";
import one2 from "@/macbook.png";


const products = [
  {
    id: 1,
    title: "Ipad Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: one,
    bgColor: "#f8f8f8",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "Ipad Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: one0,
    bgColor: "#f8f8f8",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Samsung Galaxy",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: one1,
    bgColor: "#eaeaea",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "Macbook Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: one2,
    bgColor: "#2b2b2b",
    textColor: "text-white",
  },
];

const Pop = () => {
  return (
    <div className="h-[640px] justify-start items-start inline-flex">
      {products.map(({ id, title, description, image, bgColor, textColor }) => (
        <div key={id} className={`grow shrink basis-0 px-8 pt-[20px] pb-14 bg-[${bgColor}] flex-col justify-start items-start gap-6 inline-flex`}>
          <Image className="w-[360px] h-[366px]" src={image} alt={title} />
          
          <div id="firejet-html-app" className="font-inter flex w-full flex-col items-start gap-y-4 font-medium leading-6 tracking-[0px]">
            <div className={`self-stretch text-[33px] font-light leading-[48px] ${textColor}`}>
              {title}
            </div>
            <div className="flex items-start self-stretch text-sm leading-6 text-[gray]">
              <p>{description}</p>
            </div>
            <div className={`flex items-center justify-center rounded-md border border-solid border-x-${textColor} border-y-${textColor} px-14 py-[15px]`}>
              <div className={`text-center leading-6 ${textColor}`}>Shop Now</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pop;