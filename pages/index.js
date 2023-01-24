import Head from 'next/head'
import { BrandTwitter, BrandDiscord, Code } from 'tabler-icons-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="h-full">
        <div className="bg-[#5379F6] h-[100px] content-center flex gap-10 md:gap-2 items-center w-full">
          <img src="./logo.png" className="md:px-12 md:absolute w-1/3 md:w-1/4 md:left-10" />
          <div className="flex gap-2 md:absolute md:p-[10rem] right-0">
            <button className="rounded-lg p-1 md:py-2 md:px-4 md:btn bg-white text-[#5379F6]">Get Vouched</button>
            <button className="rounded-lg p-1 md:py-4 md:px-4 md:btn bg-white text-[#5379F6]">Developers</button>
          </div>
        </div>
        <div className="md:flex gap-20">
          <div className="md:w-[35rem] p-4 md:m-[6rem]">
            <p className="text-4xl font-medium text-[#5379F6]">Decentralized Verification for Arweave Wallets.</p>
            <p className="py-2 font-extralight">VouchDAO allows users to verify once and be trusted everywhere on the Permaweb, while allowing developers to verify them with 2 lines of code.</p>
            <p className="py-2 font-extralight">It all starts with the new Vouch data protocol, defined by ANS-109. ANS-109 allows anyone on the permaweb to &quot;vouch&quot; for the identity & humanity of any other address. Anyone can run a Vouch server, providing attestations on Arweave about user identities.</p>
            <p className="py-2 font-extralight">VouchDAO is a decentralized verification layer on top of the Vouch standard. It is a community that votes together on which vouching services are trustworthy.</p>
            <p className="py-2 font-extralight">Community owned and operated.</p>
            <div className="pt-4 flex gap-2">
              <button className="btn border border-[#5379F6] hover:bg-[#5379F6] hover:text-white flex gap-2 rounded-lg py-2 px-4 btn bg-white text-[#5379F6]">
                <div className="pt-1"><Code
                  size={18}
                  strokeWidth={2}
                  className="border border-[#5379F6] rounded-full"
                /></div>
                Developer Guide
              </button>
              <button className="flex gap-2 btn bg-[#5379F6] hover:bg-white hover:text-[#5379F6] border border-[#5379F6] rounded-lg py-2 px-4 btn text-white]">
                <img src="/tick.png" className="mt-1 w-[20px] h-[18px]" />
                Get Vouched Now
              </button>
            </div>
          </div>
          <img src="./hero-image.png" className="w-[677px] md:order-last" />
        </div>
        <div className="bg-[#5379F6] h-auto py-4 w-full flex gap-10 justify-content justify-center">
          <a href="https://twitter.com/vouchdao" target="_blank" rel="noreferrer" >
            <BrandTwitter
              size={32}
              strokeWidth={1}
              color={'white'}
            />
          </a>
          <a href="https://discord.gg/6DaJqB4k" target="_blank" rel="noreferrer" >
            <BrandDiscord
              size={32}
              strokeWidth={1}
              color={'white'}
            />
          </a>
        </div>
      </main>
    </>
  )
}
