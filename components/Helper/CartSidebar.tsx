import { addItem, CartItem, removeItem } from "@/store/cartSlice"
import Image from "next/image";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";

type Props = {
  items:CartItem[];
}

const CartSidebar = ({items}:Props) => {
  const dispatch = useDispatch();
  const removeCartHandler = (id:number)=>{
    dispatch(removeItem({id}));
  }
  const addCartHandler = (item:CartItem)=>{
    dispatch(addItem(item));
  }
  return (
    <div className="mt-6 h-full mb-6 overflow-auto">
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>

      {/* No cart */}
      {items.length===0 &&(
        <>
          <div className="flex items-center w-full h-[80vh] flex-col justify-center">
            <Image
              src="/empty-cart.png"
              alt="empty-cart"
              width={300}
              height={300}
              className="object-cover mx-auto"
            />
            <h1 className="mt-8 text-2xl">Your Cart is Empty</h1>
          </div>
        </>
      )}

      {/* loop through cart items */}
      {items?.length>0 && (
        <div className="border-b-2 border-black p-3 flex gap-4 flex-col">
          {
            items?.map((item:CartItem) => (
              <div className="mb-4">
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    height={120}
                    width={120}
                    className="h-[200px] w-[150px] object-contain"
                    alt={item.title}
                  />
                </div>
                <h1 className="text-lg text-blue-400 font-semibold mt-4 hover:underline">{item.title}</h1>
                <h1 className="text-base text-blue-950">${(item?.quantity*Number(item?.price)).toFixed(2)}</h1>
                <h1 className="text-base font-bold mb-2">Quantity : {item.quantity}</h1>
                <div className="flex items-center space-x-4">
                  <Button onClick={()=>addCartHandler(item)} size="sm" variant="default">
                    <Plus/>
                  </Button>
                  <Button onClick={()=>removeCartHandler(item.id)} size="sm" variant="destructive">
                    <Minus/>
                  </Button>
                </div>
              </div>
            ))
          }
          <Link className="mb-12 block" href="/cart">
            <SheetClose>
              <Button size="lg">View Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartSidebar