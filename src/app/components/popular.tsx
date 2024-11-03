import Image from 'next/image';
import React from 'react';

const Popular = () => {
  return (
    <div>
      <section className="flex flex-wrap items-start font-medium">
        <article className="flex overflow-hidden relative flex-col flex-1 shrink px-8 pt-96 pb-14 basis-0 bg-stone-50 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="flex overflow-hidden z-0 flex-col w-full">
            <h2 className="text-4xl font-light leading-none text-black">Popular Products</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <a
              href="#"
              className="gap-2 self-start px-14 py-4 mt-4 text-base text-center text-black rounded-md border border-black border-solid max-md:px-5"
            >
              Shop Now
            </a>
          </div>
          <Image
            loading="lazy"
            src="/m4.png" // Use the path directly
            alt="iPad Pro device"
            className="object-contain absolute top-2/4 left-2/4 z-0 max-w-full -translate-x-2/4 -translate-y-2/4 aspect-[0.98] h-[366px] w-[360px] -mt-24"
            width={360} // Specify width
            height={366} // Specify height
          />
        </article>
        <article className="flex overflow-hidden relative flex-col flex-1 shrink px-8 pt-96 pb-14 basis-0 bg-stone-50 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="flex overflow-hidden z-0 flex-col w-full">
            <h2 className="text-4xl font-light leading-none text-black">iPad Pro</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <a
              href="#"
              className="gap-2 self-start px-14 py-4 mt-4 text-base text-center text-black rounded-md border border-black border-solid max-md:px-5"
            >
              Shop Now
            </a>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad64994840ac7a76bfdc0e42b901cb3dd47f5906d88822ed1b4fbaa7c83ef07c?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt="iPad Pro device"
            className="object-contain absolute top-2/4 left-2/4 z-0 max-w-full -translate-x-2/4 -translate-y-2/4 aspect-[0.98] h-[366px] w-[360px] -mt-24"
          />
        </article>
        <article className="flex overflow-hidden relative flex-col flex-1 shrink px-8 pt-96 pb-14 bg-gray-200 basis-0 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="flex overflow-hidden z-0 flex-col w-full">
            <h2 className="text-4xl font-light leading-none text-black">
              Samsung Galaxy
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <a
              href="#"
              className="gap-2 self-start px-14 py-4 mt-4 text-base text-center text-black rounded-md border border-black border-solid max-md:px-5"
            >
              Shop Now
            </a>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5df89c74df730f82cc1acc0eb5f10f79cde50db352d2c669c1e8a512dc11f3d?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt="Samsung Galaxy device"
            className="object-contain absolute top-0 right-0 z-0 max-w-full aspect-square h-[360px] w-[360px]"
          />
        </article>
        <article className="flex overflow-hidden relative flex-col flex-1 shrink px-8 pt-96 pb-14 basis-0 bg-gray-700 min-w-[280px] max-md:px-5 max-md:pt-24">
          <div className="flex overflow-hidden z-0 flex-col w-full">
            <h2 className="text-4xl font-light leading-none text-white">
              Macbook Pro
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <a
              href="#"
              className="gap-2 self-start px-14 py-4 mt-4 text-base text-center text-white rounded-md border border-white border-solid max-md:px-5"
            >
              Shop Now
            </a>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275f4e118002979e0bcd3ea288da6649ddbfe667cb9dc53da87f1002fb95893?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt="Macbook Pro device"
            className="object-contain absolute top-0 right-0 z-0 max-w-full aspect-[0.96] h-[376px] w-[360px] bg-gray-800"
          />
        </article>
      </section>
    </div>
  );
};

export default Popular;