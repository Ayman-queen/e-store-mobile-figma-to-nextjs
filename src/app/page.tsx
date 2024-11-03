
import React from "react";
import Image from "next/image";

// Importing components
import Nav from "./components/nav";
import Ipho from "./components/ipho";
import Icons from "./components/icons";
import Card from "./components/card"; 
import Popular from "./components/popular";
import Discount from "./components/discount";
import Footer from "./components/footer";

// Reference to the image in the public folder
const imageSrc = "/Banner 2 (1).png"; // Direct path to the image

export default function Home() {
  return (
    <div>
      <Nav />
      <Ipho />

      <section className="flex flex-wrap items-start">
        <div className="flex flex-col flex-1 shrink justify-center basis-80 min-w-[240px] max-md:max-w-full">
          {/* Playstation 5 Section */}
          <article className="flex overflow-hidden relative gap-10 items-start pr-12 pl-80 w-full font-medium bg-white min-h-[328px] max-md:px-5 max-md:flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46864a814c25f91fa3ce6880e7aad8fdf44ecad0ae0c4e2f8b42a5d0441201c?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
              alt="PlayStation 5 gaming console"
              className="object-contain absolute bottom-0 left-0 z-0 self-start aspect-[1.1] h-[343px] min-w-[240px] right-[360px] max-md:w-full max-md:h-auto"
            />
            <header className="flex z-0 flex-col flex-1 shrink justify-center my-auto basis-0 max-w-[404px] min-w-[240px]">
              <h2 className="text-5xl leading-none text-black max-md:text-4xl">
                Playstation 5
              </h2>
              <p className="mt-4 text-sm leading-6 text-neutral-400">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </header>
          </article>

          {/* Other Product Sections */}
          <div className="flex flex-wrap w-full min-h-[272px] max-md:max-w-full">
            {/* Apple AirPods Max */}
            <article className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full bg-gray-200 basis-0 min-w-[240px] max-md:px-5 max-md:flex-col">
              <header className="flex z-0 flex-col justify-center my-auto w-40 h-[270px] max-w-[168px]">
                <h2 className="text-3xl font-light leading-10 text-black">
                  Apple <br /> AirPods <br /><span className="font-medium">Max</span>
                </h2>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
                  Computational audio. Listen, it's powerful.
                </p>
              </header>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e16c2f9b62bf2d1f74837b96fe88b80556964b2dcfd99a51b1df6e1b7e2dff?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                alt="Apple AirPods Max headphones"
                className="object-contain absolute bottom-0 left-0 right-64 z-0 shrink-0 self-start aspect-[0.38] h-[272px] w-[104px] max-md:w-1/2 max-md:mx-auto"
              />
            </article>

            {/* Apple Vision Pro */}
            <article className="flex overflow-hidden relative flex-1 shrink items-start pr-12 pl-40 h-full basis-0 bg-neutral-700 min-w-[240px] max-md:px-5 max-md:flex-col">
              <header className="flex z-0 flex-col justify-center my-auto w-40 h-[270px] max-w-[176px]">
                <h2 className="text-3xl font-light leading-10 text-white">
                  Apple <br /> Vision <span className="font-medium text-white">Pro</span>
                </h2>
                <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
                  An immersive way to experience entertainment.
                </p>
              </header>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28db96c950873cbf35f90622187dbeabeb8136492ded99cfc9118fe9ead6388?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                alt="Apple Vision Pro headset"
                className="object-contain absolute left-0 right-56 z-0 shrink-0 self-start aspect-[0.72] inset-y-[41px] w-[136px] max-md:w-1/2 max-md:mx-auto"
              />
            </article>
          </div>
        </div>

        {/* Macbook Air Section */}
        <article className="flex overflow-hidden relative flex-1 shrink gap-px items-start py-40 pr-64 pl-14 bg-gray-200 basis-0 min-h-[600px] min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <header className="flex z-0 flex-col flex-1 shrink my-auto basis-[116px] max-w-[360px] min-w-[240px]">
            <div className="flex flex-col w-full">
              <h2 className="text-6xl font-thin text-black leading-[56px] max-md:text-4xl max-md:leading-10">
                Macbook<br /> <span className="font-medium">Air</span>
              </h2>
              <p className="mt-4 text-sm font-medium leading-6 text-neutral-400">
                The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </p>
            </div>
            <a
              href="#"
              role="button"
              tabIndex={0}
              className="gap-2 self-start px-14 py-4 mt-4 text-base font-medium text-center text-black rounded-md border border-black border-solid max-md:px-5"
            >
              Shop Now
            </a>
          </header>
          <div className="flex absolute left-2/4 z-0 flex-col self-start px-14 pb-9 -translate-x-2/4 bottom-[49px] h-[502px] min-w-[240px] translate-y-[0%] w-[292px] max-md:w-full max-md:mx-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43af78ad6da8882093f554b85e448e62e84d4e44043b785238da64c28e3137a6?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
              alt="MacBook Air 15-inch laptop"
              className="object-contain mr-0 w-full rounded-none h-96 aspect-[1.46] max-md:max-w-full"
            />
          </div>
        </article>
      </section>

      {/* Other Components */}
      <Icons />
      <Card />
      <Popular />
      <Discount />

      {/* Image with alt text */}
        <Image
        src={imageSrc} // Using path
        alt="Description of image"
        width={1800}
        height={800}
        className="w-full h-auto max-md:w-[90%] max-md:h-[auto]" // Ensures responsiveness
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}