"use client"
import { addItem } from "@/store/cartSlice"
import { Product } from "@/typing"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { ShoppingBag } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Props = {
  singleProduct: Product
}

const ProductCard = ({ singleProduct }: any) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const addToCartHanlder = (product: Product)=>{
    toast({
      title: "Item is added to cart",
    })
    dispatch(addItem(product));
  }
  return (
    <div className="p-4 border rounded-lg shadow-md hover:scale-105 border-1 hover:border-2 border-green-300 hover:border-green-400">
      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src={singleProduct.image}
          height={150}
          width={150}
          className="h-[200px] w-[150px] object-contain"
          alt={singleProduct.title}
        />
      </div>

      {/* Product Title */}
      <Link href={`/product/product-details/${singleProduct.id}`} className="text-lg text-blue-400 font-semibold mt-4 hover:underline">{singleProduct.title}</Link>

      {/* Product Price */}
      <p className="text-rose-400 font-bold mt-2">Price <span className="text-green-600">: ₹{singleProduct.price}/-</span></p>

      {/* Product Category */}
      <Button onClick={()=>addToCartHanlder(singleProduct)} size={"icon"}>
        <ShoppingBag size={18}/>
      </Button>
      <p className="inline-block ml-6 p-[0.20rem] px-1 bg-green-400 text-sm text-black rounded-lg mt-3 capitalize">{singleProduct.category}</p>
    </div>
  )
}

export default ProductCard
