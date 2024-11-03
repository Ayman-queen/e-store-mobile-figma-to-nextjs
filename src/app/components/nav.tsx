import React from 'react';

const Nav = () => {
  return (
    <div>
      <header className="flex flex-col">
        <nav className="flex flex-wrap gap-10 justify-between items-center px-40 py-4 w-full bg-white border-b border-solid border-b-zinc-400 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center self-stretch my-auto bg-white w-[65px]">
            <a href="/" className="flex items-center w-[65px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/515715d61f2e8c1c8f738e783232287309473044894ef92aa4a9e8b109791393?apiKey=63020574feac4f3895ec244f357db276&"
                alt="Company Logo"
                className="object-contain self-stretch my-auto aspect-[2.96] fill-black w-[65px]"
              />
            </a>
          </div>
          <form
            role="search"
            className="flex gap-2 items-center self-stretch p-4 my-auto text-sm font-medium leading-none rounded-lg bg-neutral-100 min-h-[56px] min-w-[240px] text-stone-500 w-[372px]"
          >
            <label htmlFor="searchInput" className="sr-only">
              Search
            </label>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c08d4ddf7e27a14fee29bb40ba87b023238a48dbf6644179223163c14bd556?apiKey=63020574feac4f3895ec244f357db276&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <input
              type="search"
              id="searchInput"
              placeholder="Search"
              className="bg-transparent border-none outline-none w-full"
            />
          </form>
          <ul className="hidden md:flex gap-10 items-start self-stretch my-auto text-base font-medium text-black min-w-[240px]">
            <li>
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="opacity-30">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="opacity-30">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="opacity-30">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex gap-6 justify-center items-center self-stretch my-auto">
            <button
              aria-label="Notifications"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?apiKey=63020574feac4f3895ec244f357db276&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </button>
            <button
              aria-label="Messages"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53b362c5faf184b3e1e97e9c196992a672472cd22fc1e00e5d1c34c825a1b05c?apiKey=63020574feac4f3895ec244f357db276&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </button>
            <button
              aria-label="User Profile"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f70576b8220eed338b22cd62f926d03148a675ef08d90ce4338b7accd39bfaf?apiKey=63020574feac4f3895ec244f357db276&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex md:hidden flex-col gap-4 items-start self-stretch my-auto text-base font-medium text-black">
            <li>
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="opacity-30">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="opacity-30">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="opacity-30">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;