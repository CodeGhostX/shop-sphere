import { UserIcon } from "lucide-react"
import SearchBox from "../Helper/SearchBox"
import ShoppinCart from "../Helper/ShoppinCart"
import { SignedIn } from "@clerk/nextjs"
import { SignedOut, SignInButton,UserButton } from "@clerk/nextjs"
import Logo from "../Helper/Logo"

const Nav = () => {
  return (
    <div className="flex flex-row items-center sticky top-0 left-0 w-full z-50 bg-white justify-between md:px-[6rem] px-3 py-3 shadow-lg ">
      {/* Logo */}
      <Logo/>
      {/* Right Side Icon */}
      <div className="flex flex-row gap-[2rem] ">
        <SearchBox/>
        <ShoppinCart/>
        <SignedIn>
          <div><UserButton/></div>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <UserIcon size={30} cursor={"pointer"}/>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  )
}

export default Nav
