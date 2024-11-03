import React from 'react';

const Ipho = () => {
  return (
    <div>
      <section className="flex overflow-hidden flex-wrap gap-6 justify-between items-center px-40 max-md:px-5 bg-[#2C2C2C] -mt-8">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[320px] max-md:max-w-full">
          <header className="flex flex-col w-full text-white">
            <h2 className="text-2xl font-semibold leading-none">
              Pro.Beyond.
            </h2>
            <h1 className="mt-6 text-8xl font-thin tracking-tighter leading-none max-md:text-4xl">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
          </header>
          <p className="mt-6 text-lg font-medium leading-none text-neutral-400 max-md:max-w-full">
            Created to change everything for the better. For everyone
          </p>
          <a
            href="#"
            className="gap-2 self-start px-14 py-4 mt-6 text-base font-medium text-center text-white rounded-md border border-white border-solid max-md:px-5"
          >
            Shop Now
          </a>
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[406px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d540e3f81d190798d440dcdbb0a6b51754fa027d03d611527fc342d70ef0673?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt="iPhone 14 Pro"
            className="object-contain w-full aspect-[0.64] max-md:w-[100%] max-md:aspect-[1]"
          />
        </div>
      </section>
    </div>
  );
};

export default Ipho;