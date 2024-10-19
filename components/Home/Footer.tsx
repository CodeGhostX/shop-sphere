import Logo from "../Helper/Logo"

const Footer = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-10 mb-10">
        {/* Left Logo */}
        <div className="lg:col-span-4 col-span-10">
          <h1 className="p-4 text-blue-500 font-bold text-center lg:ml-48"><Logo/></h1>
          <p className="lg:px-48 px-32 text-gray-400 text-center">
            Discover an exceptional shopping experience with our exclusive range of products. From the latest tech gadgets to stylish fashion, we bring quality and convenience right to your doorstep.
          </p>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-6 col-span-10 grid lg:grid-cols-3 grid-cols-1 ml-4 lg:ml-0">
          {/* 1 */}
          <div className="text-center lg:text-left flex flex-col gap-3">
            <h1 className="text-2xl font-bold pr-4 pt-4 pb-4 text-gray-700">Information</h1>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">About Us</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Privacy Policy</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Shipping Policy</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Return Policy</a>
          </div>

          {/* 2 */}
          <div className="text-center lg:text-left flex flex-col gap-3">
            <h1 className="text-2xl font-bold pr-4 pt-4 pb-4 text-gray-700">Account</h1>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Dashboard</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">My Orders</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Account Details</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Track My Order</a>
          </div>

          {/* 3 */}
          <div className="text-center lg:text-left flex flex-col gap-3">
            <h1 className="text-2xl font-bold pr-4 pt-4 pb-4 text-gray-700">Shop</h1>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Affiliate</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Best Seller</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Latest Products</a>
            <a href="#" className="ml-2 text-gray-400 block hover:underline">Sale Products</a>
          </div>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0"/>
      <div className="text-center font-bold mb-4">Made With 🧠 by Abhishek Kumar.</div>
    </div>
  )
}

export default Footer