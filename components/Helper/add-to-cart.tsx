"use client"
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button"
import { addItem, CartItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import { useDispatch } from "react-redux";



const AddtoCart = ({ product }: {product:Product}) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const addCartHandler = ()=>{
    toast({
      title: "Item is added to cart",
    })
    dispatch(addItem(product));
  }
  return (
    <Button onClick={addCartHandler} size="lg" variant="default" className="mt-4">Add to Cart</Button>
  )
}

export default AddtoCart