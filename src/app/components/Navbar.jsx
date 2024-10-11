'use client'

import { Modal, initFlowbite } from "flowbite";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = (props) => {
  const toggleModal = (type, id) => {
    const modalElement = document.getElementById(id);
    const modal = new Modal(modalElement, { closable: false });
    type === "show" ? modal.show() : modal.hide();
  };

  useEffect(() => {
    initFlowbite();
  }, [props.user]);
  return (
    <main>
      <section className="sticky top-0 z-50 md:z-40 bg-white">
        <nav className="sm:pb-8 lg:pt-4 px-4">
          <div className="max-w-screen flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                className="h-8 lg:h-10"
                alt="Game Maker "
              />
              <span className="ms-2 font-semibold text-[#FE5000] md:hidden xl:flex text-xl sm:text-3xl">
                Free Game Maker
              </span>
            </Link>
            <div className="flex md:hidden items-center md:order-2">
              <button
                data-modal-target="main-menu-modal"
                data-modal-toggle="main-menu-modal"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <Image src="/svg/menu.svg" width="28" height="28" alt="menu" />
              </button>
            </div>
            <div
              id="navbar"
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link
                    href="/"
                    className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FE5000] sm:hover:border-b-2 uppercase border-black pb-2"
                  >
                    Showcase
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                  >
                    Reseller
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase border-black pb-2 hover:text-[#FE5000] sm:hover:border-b-2"
                  >
                    Faqs
                  </Link>
                </li>
                {/* {props.user ? (
                  <li>
                    <button
                      type="button"
                      className="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
                      aria-expanded="false"
                      data-dropdown-toggle="user-dropdown"
                      data-dropdown-placement="bottom"
                    >
                      Account
                    </button>
                    <div
                      id="user-dropdown"
                      className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                    >
                      <div className="px-4 py-3">
                        <span className="block text-sm">
                          {props.user.fullName}
                        </span>
                        <span className="block text-sm text-gray-500 truncate">
                          {props.user.userEmail}
                        </span>
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <Link
                            href="/account"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <div
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            data-modal-target="logout-modal"
                            data-modal-toggle="logout-modal"
                          >
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li>
                    <button
                      id="login"
                      type="button"
                      className="text-black hover:text-white hover:bg-black font-medium uppercase rounded-lg border border-black px-7 py-1"
                      onClick={() => toggleModal("show", "auth-modal")}
                    >
                      Login
                    </button>
                  </li>
                )} */}
              </ul>
            </div>

            {/* Mobile Navbar */}
            <div
              id="main-menu-modal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full h-screen overflow-x-hidden overflow-y-auto"
            >
              <div class="relative bg-black text-white w-full h-full flex flex-col justify-between">
                <div>
                  <div class="flex items-start justify-between px-4 py-5 border-b border-[#3A3A3A] rounded-t">
                    <div class="flex gap-x-2 text-white">
                      <Image
                        src="/svg/profile-circle.svg"
                        class="w-8"
                        width={32}
                        height={32}
                        alt="profile"
                      />
                      {props.user ? (
                        <div class="px-2">
                          <span class="block text-sm">
                            {props.user.fullName}
                          </span>
                          <span class="block text-sm truncate">
                            {props.user.userEmail}
                          </span>
                        </div>
                      ) : (
                        <div>
                          <button
                            id="login"
                            type="button"
                            class="text-white font-medium capitalize px-2 pt-1.5"
                            data-modal-hide="main-menu-modal"
                            onClick={() => toggleModal("show", "auth-modal")}
                          >
                            Log in
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                      data-modal-hide="main-menu-modal"
                    >
                      <Image
                        src="/svg/close-circle-black.svg"
                        height="24"
                        width="24"
                        alt="close-circle"
                      />
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div class="pt-5 flex flex-col gap-y-5">
                    <Link
                      href="/"
                      class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Home
                    </Link>
                    <Link
                      href="/"
                      class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Showcase
                    </Link>
                    <Link
                      href="/"
                      class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Features
                    </Link>
                    <Link
                      href="/"
                      class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      data-modal-hide="main-menu-modal"
                    >
                      Reseller
                    </Link>
                    {props.user && (
                      <Link
                        href="/"
                        data-modal-hide="main-menu-modal"
                        class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      >
                        Dashboard
                      </Link>
                    )}
                    {/* {props.user && (
                      <div
                        v-if="userStore.user"
                        data-modal-hide="main-menu-modal"
                        class="text-white text-xl font-semibold border-b border-[#3A3A3A] px-4 pb-5"
                      >
                        <div
                          data-modal-target="logout-modal"
                          data-modal-toggle="logout-modal"
                        >
                          Logout
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
};

export default Navbar;
