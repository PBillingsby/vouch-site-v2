import { useRouter } from 'next/router'
import { ArrowLeft } from 'tabler-icons-react';

export const BackButton = () => {
  const router = useRouter();
  return (
    <div className="p-2 rounded-full hover:bg-gray-200">
      <button className="hover:bg-gray-200" onClick={() => router.back()}>
        <ArrowLeft size={28} strokeWidth={2} color="black" />
      </button>
    </div>
  )
}