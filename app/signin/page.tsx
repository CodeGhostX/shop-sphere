"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const page = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const {toast} = useToast();
  const router = useRouter();
  const handleClick = async ()=>{
    const res = await signIn("credentials", {
      username : emailRef.current?.value,
      password : passRef.current?.value,
      redirect : false
    });
    if (res?.ok) {
      toast({
        title: "Sign In Successful",
        description: "You have successfully signed in.",
      });
      router.push("/");
    } else {
      toast({
        title: "Sign In Failed",
        description: res?.error || "Invalid credentials.",
        variant:"destructive"
      });
    }
    if(emailRef.current) emailRef.current.value = "";
    if(passRef.current) passRef.current.value = "";
  }
  return (
    <div className="h-screen shadow-lg p-6 flex flex-col mt-12 items-center gap-4">
      <h1 className="text-3xl">Sign In</h1>
      <div className="flex flex-col gap-6 shadow-xl rounded-md p-6">
        <div className="flex flex-col">
          <label className="text-xl">Email</label>
          <input ref={emailRef} className="border-2 px-3 py-1 rounded-md" type="email" />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">Password</label>
          <input ref={passRef} className="border-2 rounded-md px-3 py-1" type="password" />
        </div>
        <Button onClick={handleClick} className="bg-blue-500 hover:bg-blue-300 hover:text-black">Submit</Button>
        <p className="text-sm">Not a User ? <Link className="text-blue-700 underline" href={"/api/auth/signup"}>Register Here..</Link></p>
      </div>
    </div>
  )
}

export default page