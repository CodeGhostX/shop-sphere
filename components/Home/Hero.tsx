import Image from "next/image"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <main className="grid grid-cols-1 h-[36rem] lg:grid-cols-2">
      {/* Decription Left Side */}
      <div className="flex flex-col justify-center p-12 lg:p-32">
        <h1 className="text-2xl lg:text-4xl font-extrabold">Shop the Latest Arrivals from Your <span className="text-rose-600">Favourite 💓</span> Brands</h1>
        <p className="text-gray-400 text-md pt-3">Be the first to check out the newest releases from top brands. Keep your style fresh and your home updated with the latest in fashion, electronics, and more...</p>
      </div>

      {/* Image Right Side */}
      <div className="flex items-center justify-center lg:pr-48">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] ">
          <Image
            src="/Shirt2.png"
            alt="Shirt Image"
            layout="fill"
            objectFit="contain"
            className="bg-transparent"
          />
        </div>
      </div>
    </main>
  )
}

export default Hero