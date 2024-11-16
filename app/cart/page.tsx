"use client"

import PayPalButton from "@/components/Helper/PayPalButton";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, clearcart, removeItem } from "@/store/cartSlice";
import { RootState } from "@/store/store";
import { Plus, Minus } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const session = useSession();
  const user = session?.data?.user;
  const removeCartHandler = (id:number)=>{
    dispatch(removeItem({id}));
  }
  const addCartHandler = (item:CartItem)=>{
    dispatch(addItem(item));
  }
  const router = useRouter();
  const handleSuccess = (details:any)=>{
    router.push("/success");
    dispatch(clearcart());
  }
  const items = useSelector((state: RootState)=> state.cart.items);
  const totalQuantity = items.reduce((total, item)=>total+item.quantity, 0);
  const totalPrice = items.reduce((total, item)=> total + Number(item.price) * item.quantity, 0).toFixed(2);
  return (
    <div className="mt-8 min-h-[60vh]">
      {/* Cart is Empty */}
      {items.length==0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
          src="/empty-cart.png"
          alt="Empty cart"
          width={400}
          height={400}
          className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your cart is Empty</h1>
          <Link href="/">
            <Button size="lg" className="mt-8">Shop Now</Button>
          </Link>
        </div>
      )}

      {/* Item Exits */}
      {
        items.length>0 && (
          <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
            <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
              <h1 className="p-4 text-xl md:text-3xl font-bold text-white bg-blue-700">Your Cart ({totalQuantity} Items)</h1>
              {items.map((item)=>{

                return <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">{item.title}</h1>
                      <h1 className="md:textlg text-sm font-semibold">Category : {item.category}</h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950">₹{item.price}</h1>
                      <h1 className="md:text-lg text-sm font-semibold">Quantity : {item.quantity}</h1>
                      <div className="flex items-center mt-4 space-x-4">
                      <Button onClick={()=>addCartHandler(item)} size="sm" variant="default">
                        <Plus/>
                      </Button>
                      <Button onClick={()=>removeCartHandler(item.id)} size="sm" variant="destructive">
                        <Minus/>
                      </Button>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>

            <div className="xl:col-span-2">
              <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
                <h1 className="text-center mt-8 mb-8 text-white text-2xl font-semibold">Summary</h1>
                <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
                <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                  <span>Toatl Price</span>
                  <span>₹{totalPrice}/-</span>
                </div>
                <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
                {!user && (
                  <Button onClick={()=>signIn()} className="bg-orange-400 p-6 w-full">Sign In to Checkout</Button>
                )}
                {
                  user && (
                    <PayPalButton amount={totalPrice} onSuccess={handleSuccess}/>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default page