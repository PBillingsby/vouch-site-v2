import { BrandTwitter, BrandDiscord } from "tabler-icons-react"
export const Footer = () => {
  return (
    <footer className="bg-[#5379F6] h-auto py-4 w-full flex gap-10 justify-content justify-center">
      <a href="https://twitter.com/vouchdao" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 duration-300">
        <BrandTwitter size={32} strokeWidth={1} color={"white"} />
      </a>

      <a href="https://discord.gg/6DaJqB4k" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 duration-300">
        <BrandDiscord size={32} strokeWidth={1} color={"white"} />
      </a>
    </footer>
  )
}