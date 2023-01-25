import Head from "next/head";
import { useState } from "react";
import { BrandTwitter, BrandDiscord, Code } from "tabler-icons-react";

export default function Home() {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Head>
        <title>VouchDAO V-2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="bg-[#5379F6]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-3">
            <img src="./logo.png" className="" width="200px" height="100px" />

            <div
              className={`z-10 md:w-auto w-full ml-auto md:relative absolute right-0 md:bg-transparent  bg-white top-[100px] ${
                IsNavOpen ? "visible" : "invisible"
              } md:visible`}
            >
              <div className="w-full flex md:flex-row flex-col items-center md:gap-4 gap-1 py-2">
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
              </div>
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

      <main className="min-h-screen h-full md:pb-0 pb-10">
        <div className="container mx-auto lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col items-center">
          <div className="lg:w-1/2 md:w-9/12 lg:my-[100px] md:my-[75px] my-[30px] p-5 w-full">
            <p className="lg:text-4xl md:text-3xl text-xl font-medium text-[#5379F6]">
              Decentralized Verification for Arweave Wallets.
            </p>
            <p className="py-2 font-extralight">
              VouchDAO allows users to verify once and be trusted everywhere on
              the Permaweb, while allowing developers to verify them with 2
              lines of code.
            </p>
            <p className="py-2 font-extralight">
              It all starts with the new Vouch data protocol, defined by
              ANS-109. ANS-109 allows anyone on the permaweb to
              &quot;vouch&quot; for the identity & humanity of any other
              address. Anyone can run a Vouch server, providing attestations on
              Arweave about user identities.
            </p>
            <p className="py-2 font-extralight">
              VouchDAO is a decentralized verification layer on top of the Vouch
              standard. It is a community that votes together on which vouching
              services are trustworthy.
            </p>
            <p className="py-2 font-extralight">
              Community owned and operated.
            </p>
            <div className="pt-4 lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-4">
              <button className="btn border border-[#5379F6] hover:bg-[#5379F6] hover:text-white flex items-center gap-2 rounded-lg p-3  btn bg-white text-[#5379F6]">
                <div>
                  <Code
                    size={18}
                    strokeWidth={2}
                    className="border border-[#5379F6] rounded-full"
                  />
                </div>
                Developer Guide
              </button>

              <button className="flex items-center gap-2 text-white bg-[#5379F6] hover:bg-white hover:text-[#5379F6] border border-[#5379F6] rounded-lg p-3">
                <img src="/tick.png" className="w-[20px] h-[18px]" />
                Get Vouched Now
              </button>
            </div>
          </div>

          <img
            src="./hero-image.png"
            className="lg:w-1/2 md:w-9/12 w-full lg:ml-8 lg:mt-0 md:mt-5 mt-5 ml-0  order-first md:order-last animate-smooth-bounce"
          />
        </div>
      </main>

      <footer className="bg-[#5379F6] h-auto py-4 w-full flex gap-10 justify-content justify-center">
        <a href="https://twitter.com/vouchdao" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 duration-300">
          <BrandTwitter size={32} strokeWidth={1} color={"white"} />
        </a>

        <a href="https://discord.gg/6DaJqB4k" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 duration-300">
          <BrandDiscord size={32} strokeWidth={1} color={"white"} />
        </a>
      </footer>
    </>
  );
}
