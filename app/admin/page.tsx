import Sidebar from "@/components/Helper/Sidebar"
import { productCount, usersCount } from "../server/action";

const page = async () => {
  const totalUsers = await usersCount();
  const totalProducts = await productCount();
  return (
    <div className="flex flex-row">
      <div className="hidden sm:inline sm:w-[15%] h-screen">
        <Sidebar/>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col text-5xl p-6 text-center border-2">
          <p className="text-3xl text-red-400">Total Users</p>
          <p className="text-center pt-4 text-blue-500">{totalUsers}</p>
        </div>
        <div className="flex flex-col text-5xl p-6 text-center border-2">
          <p className="text-3xl text-red-400">Total Products</p>
          <p className="text-center text-blue-500 pt-4">{totalProducts}</p>
        </div>
      </div>
    </div>
  )
}

export default page