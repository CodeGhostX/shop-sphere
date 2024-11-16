import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        {/* Circle icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* ShopSphere text */}
        <p className="text-md inline-block font-bold text-gray-800"><span className="text-3xl">S</span>hop<span className="text-3xl">S</span>phere</p>
      </div>
    </Link>
  );
};

export default Logo;
