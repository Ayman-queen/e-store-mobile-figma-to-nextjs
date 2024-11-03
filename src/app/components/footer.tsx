import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="h-auto w-full px-40 py-[104px] bg-black flex-col justify-center items-start gap-6 inline-flex max-md:px-5 max-md:py-10">
        <div className="self-stretch justify-between items-start inline-flex flex-wrap">
          <div className="flex-col justify-start items-start gap-6 inline-flex max-md:w-full">
            <div className="flex-col justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center inline-flex" />
            </div>
            <div className="w-96 text-[#cfcfcf] text-sm font-medium font-['Inter'] leading-normal max-md:w-full">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </div>
          </div>
          <div className="h-64 justify-between items-start flex flex-wrap gap-6 max-md:flex-col">
            <div className="w-[295.50px] flex-col justify-start items-start gap-2 inline-flex max-md:w-full">
              <div className="text-white text-base font-semibold font-['Inter'] leading-none">
                Services
              </div>
              {["Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"].map((service, index) => (
                <div key={index} className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
                  {service}
                </div>
              ))}
            </div>
            <div className="w-[295.50px] flex-col justify-start items-start gap-2 inline-flex max-md:w-full">
              <div className="text-white text-base font-semibold font-['Inter'] leading-none">
                Assistance to the buyer
              </div>
              {["Find an order", "Terms of delivery", "Exchange and return of goods", "Guarantee", "Frequently asked questions", "Terms of use of the site"].map((assist, index) => (
                <div key={index} className="self-stretch text-[#cfcfcf] text-sm font-normal font-['Inter'] leading-loose">
                  {assist}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[173px] justify-between items-start inline-flex max-md:w-full">
          <div className="w-4 h-4 py-[1.33px] justify-center items-center flex" />
          <div className="w-4 h-4 px-[4.15px] py-[0.02px] justify-center items-center flex" />
          <div className="w-4 h-4 pl-[1.42px] pr-[1.36px] pt-[0.53px] pb-[0.62px] justify-center items-center flex" />
          <div className="w-4 h-4 relative" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
