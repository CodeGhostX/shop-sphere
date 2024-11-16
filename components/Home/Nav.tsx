"use client"
import { LogOutIcon, UserIcon } from "lucide-react"
import SearchBox from "../Helper/SearchBox"
import ShoppinCart from "../Helper/ShoppinCart"
import Logo from "../Helper/Logo"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button"
import { useToast } from "@/hooks/use-toast"

const Nav = () => {
  const { toast } = useToast();
  const handleSignOut = ()=>{
    toast({
      title: "You have Successfully Log Out..",
    })
    signOut();
  }
  const handleSignIn = ()=>{
    signIn();
  }
  const session = useSession();
  const user = session?.data?.user;
  return (
    <div className="flex flex-row items-center sticky top-0 left-0 w-full z-50 bg-white justify-between md:px-[6rem] px-3 py-3 shadow-lg ">
      {/* Logo */}
      <Logo/>
      {/* Right Side Icon */}
      <div className="flex flex-row gap-[2rem] ">
        <div>
          {user?.name}
        </div>
        <ShoppinCart/>
        {
          !user ?
          <Button className="bg-white text-black rounded-full hover:text-white" onClick={handleSignIn}>
            <UserIcon size={28} cursor={"pointer"}/>
          </Button>
          :
          <Button className="bg-white text-black rounded-full hover:text-white" onClick={handleSignOut}>
            <LogOutIcon size={28} cursor={"pointer"} />
          </Button>
        }
      </div>
    </div>
  )
}

export default Nav
