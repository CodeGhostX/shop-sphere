"use client"

import { signUp } from "@/app/server/action";
import { signIn } from "next-auth/react";
import { useRef } from "react";

const page = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const mailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const genRef = useRef<HTMLSelectElement | null>(null);
  const handleSubmit = async ()=>{
    const newUser = {
      fullName:nameRef.current?.value,
      email:mailRef.current?.value,
      password:passRef.current?.value,
      gender:genRef.current?.value
    }
    const response = await signUp(newUser);
    console.log(response);
    if(nameRef.current) nameRef.current.value = ""
    if(mailRef.current) mailRef.current.value = ""
    if(passRef.current) passRef.current.value = ""
    if(genRef.current) genRef.current.value = ""
  }
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl text-blue-400 mt-8">Register Here</h1>
      <form onSubmit={handleSubmit} className="w-full md:w-[25%] flex flex-col shadow-md gap-3 p-10 rounded-xl m-4 mt-4">
        <div className="flex flex-col">
          <label className="text-lg text-gray-700">Full Name</label>
          <input ref={nameRef} className="border-2 rounded-lg p-2" placeholder="Name" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-700">Email</label>
          <input ref={mailRef} className="border-2 rounded-lg p-2" placeholder="Email" type="email" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-700">Password</label>
          <input ref={passRef} className="border-2 rounded-lg p-2" placeholder="Password" type="password" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-gray-700">Gender</label>
          <select ref={genRef} className="border-2 rounded-lg p-2">
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHERS">Others</option>
          </select>
        </div>
        <button className="text-lg w-full mt-2 bg-blue-500 rounded-lg p-2 hover:bg-blue-300" type="submit">Register</button>
        <p className="text-sm">Already a User ? <button onClick={()=>signIn()} className="text-blue-700 underline" >Sign In Here..</button></p>
      </form>
    </div>
  )
}

export default page