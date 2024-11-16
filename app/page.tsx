import AllProducts from "@/components/Home/AllProducts"
import Hero from "@/components/Home/Hero"
import { NEXT_AUTH_CONFIG } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
  const user = await getServerSession(NEXT_AUTH_CONFIG);
  console.log({message:"First", user:user});
  return (
    <div>
      <Hero/>
      <AllProducts/>
    </div>
  )
}

export default page
