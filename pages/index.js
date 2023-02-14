import { Code } from "tabler-icons-react";

export default function Home() {
  return (
    <>
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
    </>
  );
}