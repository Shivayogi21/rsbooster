"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData"; 
import "./Header.css"


interface SubmenuItem {
  id: number
  title: string;
  path: string;
  newTab: boolean;
}

interface MenuItem {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubmenuItem[];
}

const Header: React.FC = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };


  const [sticky, setSticky] = useState<boolean>(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header flex  w-full items-center  text-white`}
    >
      <div className="container font-serif">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full px-6 xl:mr-2">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-2 lg:py-2" : "py-2"}`}
            >
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={120}
                height={25}
                className="w-full dark:hidden"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px]bg-gradient-to-r from-purple-900 to-violet-900 ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-gradient-to-r from-purple-900 to-violet-900 ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-gradient-to-r from-purple-900 to-violet-900 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-black px-6 py-4 duration-300 dark:border-body-color/20 dark:text-white lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem: MenuItem) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(menuItem.id)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm bg-black transition-[top] duration-300 group-hover:opacity-100 dark:bg-black lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === menuItem.id ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm bg-black text-white hover:text-primary dark:text-white dark:hover:text-dark lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0 hidden md:block">
  <Link
    href="/contact" 
    className="animated-button4 hidden sm:block h-6 text-xs px-4 py-4 text-center font-medium text-dark hover:opacity-70 dark:text-white"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Contact
  </Link>
  
</div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

