import React from 'react';

const Icons = () => {
  return (
    <div>
      <div id="firejet-html-app">
        <div className="flex w-full flex-col">
          <div className="font-inter flex flex-grow flex-col justify-center gap-y-8 bg-neutral-50 px-40 py-20 font-medium">
            <div className="flex flex-col items-center justify-between gap-x-4 gap-y-4 min-[1430px]:flex-nowrap">
              <div className="text-2xl leading-8 tracking-[0.16px] text-start mr-[800px]">
                Browse By Category
              </div>
              <section className="categories mt-10 mr-96 overflow-x-auto">
                <div className="flex gap-8 items-start text-base font-medium text-center text-black whitespace-nowrap">
                  {[
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e076ef8a323d093df46d5c9091ba04329192bcbec15c5ea3a1bc04b9287923c4?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Phone icon",
                      label: "Phones",
                    },
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6d76abb6ddc6415f085a416ee5d6c28da9176abc9884c7c7c0ed4c9a5042cdc?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Smart Watch icon",
                      label: "Smart Watches",
                    },
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d6bd52f40a1ead25666befe50f7a57b886462c0e4b696324020ca948e3d41c6?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Camera icon",
                      label: "Cameras",
                    },
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a098c43cff51321d05d0ffe0252096fec2cab66cfa4b2ac5d9d8c5e968ee01e9?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Headphones icon",
                      label: "Headphones",
                    },
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee1a2d0a0dd182cf984df313155b3ff8b23520b52f4ec66085428f760cf8069?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Computer icon",
                      label: "Computers",
                    },
                    {
                      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a07d369fd476382244ddde04135686a659a89ed6291aa9eac03a693dda62e93b?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276",
                      alt: "Gaming icon",
                      label: "Gaming",
                    },
                  ].map(({ imgSrc, alt, label }) => (
                    <article
                      key={label}
                      className="flex flex-col grow shrink-0 justify-center items-center px-8 py-6 w-32 bg-gray-200 rounded-2xl min-h-[128px] min-w-[135px] max-md:px-5"
                    >
                      <img
                        loading="lazy"
                        src={imgSrc}
                        alt={alt}
                        className="object-contain w-12 aspect-square"
                      />
                      <h2 className="mt-2">{label}</h2>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;