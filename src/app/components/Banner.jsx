"use client";

import Image from "next/image";

function copyText() {
  const text = document.getElementById("textToCopy").value;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// https://gamead.netlify.app/api

const Banner = (props) => {
  return (
    <main>
      <div className="h-[calc(100vh-88px)] min-h-[580px] xl:min-h-[550px] max-h-[812px] bg-[#FFF1E7] bg-no-repeat bg-cover bg-right-bottom sm:bg-[0_center] lg:bg-right rounded-3xl lg:rounded-[40px] px-4 sm:px-8 sm:py-4 max-lg:my-4 mx-4">
        <div className="h-full flex flex-col lg:flex-row">
          <div className="px-2 pt-10 xl:p-10 lg:basis-[55%]">
            <div className="lg:h-full flex flex-col">
              <div className="lg:h-1/2 flex">
                <div>
                  <h1 className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl 2xl:!leading-[72px] text-[#FE5000] text-start font-bold mb-2 2xl:mb-4">
                    Create Game Website with our
                    <span className="text-black block">Our Free API</span>
                  </h1>
                  <h2 className="lg:text-lg 2xl:text-xl">
                    Are you looking to create a Game website, with our Free API,
                  </h2>
                  <h2 className="lg:text-lg 2xl:text-xl mb-6 2xl:mb-8">
                    220 Games Included, Its Free Forever
                  </h2>
                  <small className="text-green-500 font-semibold">
                    Limit : 100 Request / IP Address in 6 Hour
                  </small>
                </div>
              </div>
              <div className="lg:h-1/2">
                <div className="relative">
                  <input
                    id="textToCopy"
                    type="text"
                    className="w-full text-xs sm:text-base lg:text-sm xl:text-base bg-transparent border-2 border-black focus:ring-0 focus:border-black rounded-lg sm:rounded-xl p-2 sm:p-3"
                    placeholder="Enter Your Website Address"
                    value=""
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-8 mt-8">
                  <button
                    className="bg-black text-white text-xs sm:text-base lg:text-sm xl:text-base font-medium rounded-lg sm:rounded-xl hover:bg-opacity-80 focus:ring-gray-400 focus:ring-4 focus:outline-none px-8 py-3 sm:px-14 sm:py-3 lg:px-10 lg:py-2 2xl:px-16 2xl:py-4"
                    onClick={() => copyText()}
                  >
                    Copy Now
                  </button>
                  <div className="flex items-center">
                    <div className="flex -space-x-4">
                      <Image
                        className="w-12 h-12 border-2 border-white rounded-full bg-[#FCE594]"
                        src="/images/avatar1.png"
                        alt="avatar1"
                        width={48}
                        height={48}
                      />
                      <Image
                        className="w-12 h-12 border-2 border-white rounded-full bg-[#A6DBE8]"
                        src="/images/avatar2.png"
                        alt="avatar2"
                        width={48}
                        height={48}
                      />
                      <Image
                        className="w-12 h-12 border-2 border-white rounded-full bg-[#FE5000]"
                        src="/images/avatar3.png"
                        alt="avatar3"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">+ 20.000</p>
                      <p className="text-sm">Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-green-500">Contact : smileysoftwares@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="lg:basis-[45%] hidden lg:flex h-full relative">
            <div className="pt-20">
              <Image
                src="/images/screenshot.png"
                width={512}
                height={256}
                alt="banner-main"
                className="w-full"
              />
              <p className="text-4xl font-semibold text-center leading-snug">
                Make your dream App for
                <span className="block text-[#FE5000]">Andriod & Ios</span>
              </p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-16 lg:right-16 flex justify-center gap-2 sm:gap-4 lg:gap-6">
              <a href="#" target="_blank">
                <Image
                  src="/svg/google-play.svg"
                  width={120}
                  height={56}
                  alt="goole-play"
                  className="w-36 sm:w-44 lg:w-32 xl:w-fit"
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  src="/svg/app-store.svg"
                  width={120}
                  height={56}
                  alt="goole-play"
                  className="w-36 sm:w-44 lg:w-32 xl:w-fit"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
