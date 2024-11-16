"use client";

import { addProduct } from "@/app/server/action";
import { redirect } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

const page = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status !== "loading") {
      if(!session) signIn();
      else if ((session?.user as { role?: string })?.role !== "ADMIN") redirect("/");
    }
  }, [session, status]);

  const {toast} = useToast();
  const titleref = useRef<HTMLInputElement|null>(null);
  const descref = useRef<HTMLTextAreaElement|null>(null);
  const priceref = useRef<HTMLInputElement|null>(null);
  const imgref = useRef<HTMLInputElement|null>(null);
  const catref = useRef<HTMLSelectElement|null>(null);

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    const newProduct = {
      title:titleref.current?.value,
      description:descref.current?.value,
      price:Number(priceref.current?.value),
      image:imgref.current?.value,
      category:catref.current?.value
    }
    const res = await addProduct(newProduct);
    toast({
      title: "Item is added to Database Successfully",
    })
    console.log(res);
    if(titleref.current) titleref.current.value = ""
    if(descref.current) descref.current.value = ""
    if(priceref.current) priceref.current.value = ""
    if(imgref.current) imgref.current.value = ""
    if(catref.current) catref.current.value = ""
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Create New Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Title</label>
            <input
              ref={titleref}
              className="border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              placeholder="Enter product title"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Description</label>
            <textarea
              ref={descref}
              className="border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              rows={4}
              placeholder="Enter product description"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Price</label>
            <input
              ref={priceref}
              className="border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="number"
              placeholder="Enter product price"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Image URL</label>
            <input
              ref={imgref}
              className="border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              placeholder="Enter image URL"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700">Category</label>
            <select
              ref={catref}
              className="border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="ELECTRONICS">Electronics</option>
              <option value="FASHION">Fashion</option>
              <option value="HOME">Home</option>
              <option value="BEAUTY">Beauty</option>
              <option value="SPORTS">Sports</option>
              <option value="BOOKS">Books</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
