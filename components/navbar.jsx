import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import { BackButton } from '.';

export const Navbar = () => {
  const [home, setHome] = useState();
  const [IsNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHome(window.location.pathname === '/');
    }
  })

  return (
    // <div className="bg-[#5379F6] h-[100px] content-center flex gap-10 md:gap-2 items-center w-full">
    //   <a href="/" className="md:px-12 md:absolute w-1/3 md:w-1/4 md:left-10"><img src="./logo.png" /></a>
    //   <div className="justify-between md:absolute md:p-10 right-0">
    //     {home ?
    //       <div className="flex gap-2">
    //         <button className="rounded-lg p-1 md:py-4 md:px-4 md:btn bg-white text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:border-white">Get Vouched</button>
    //         <button className="rounded-lg p-1 md:py-4 md:px-4 md:btn bg-white text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:border-white">Developers</button>
    //         <NextLink href="/propose" as="/propose" passHref>
    //           <button className="rounded-lg p-1 md:py-4 md:px-4 md:btn bg-white text-blue-500 hover:bg-blue-500 hover:text-white hover:border hover:border-white">Propose Service</button>
    //         </NextLink>
    //       </div>
    //       :
    //       <div>
    //         <BackButton />
    //       </div>
    //     }
    //   </div>
    // </div>
    <header className="bg-[#5379F6]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-3">
          <img src="./logo.png" className="" width="200px" height="100px" />

          <div
            className={`z-10 md:w-auto w-full ml-auto md:relative absolute right-0 md:bg-transparent  bg-white md:top-0 top-[100px] ${IsNavOpen ? "visible" : "invisible"
              } md:visible`}
          >
            {home ?
              (
                <div className="w-full flex md:flex-row flex-col items-center md:gap-2 md:py-2">
                  <button
                    className="md:rounded-md border border-transparent md:hover:border-white md:hover:bg-[#5379F6] md:hover:text-white 
                    lg:px-4 lg:py-2 md:py-2 md:px-2 py-2 md:bg-white bg-[#5379F6] md:text-[#5379F6] text-white md:w-auto w-full"
                  >
                    Get Vouched
                  </button>
                  <button
                    className="md:rounded-md border border-transparent md:hover:border-white md:hover:bg-[#5379F6] md:hover:text-white 
                    lg:px-4 lg:py-2 md:py-2 md:px-2 py-2 md:bg-white bg-[#5379F6] md:text-[#5379F6] text-white md:w-auto w-full"
                  >
                    Developers
                  </button>
                  <NextLink href="/services" as="/services" passHref>
                    <button
                      className="md:rounded-md border border-transparent md:hover:border-white md:hover:bg-[#5379F6] md:hover:text-white 
                    lg:px-4 lg:py-2 md:py-2 md:px-2 py-2 md:bg-white bg-[#5379F6] md:text-[#5379F6] text-white md:w-auto w-full"
                    >
                      Services
                    </button>
                  </NextLink>
                </div>
              )
              :
              <div>
                <BackButton />
              </div>
            }
          </div>

          <button
            onClick={() => setIsNavOpen(!IsNavOpen)}
            type="button"
            className="hover:bg-[#fff] inline-flex items-center justify-center p-2 rounded-md  text-[#5379F6] bg-white 
             md:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!IsNavOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}