"use client"

import { allProducts } from "@/Request/getAllCategories";
import { Product } from "@/typing";
import { useEffect, useState } from "react";
import Loader from "../Helper/Loader";
import ProductCard from "../Helper/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]|null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    try {
      const getProducts = async ()=>{
        const result:Product[] = await allProducts();
        setProducts(result);
      }
      getProducts();
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }, [])
  return (
    <div>
      <h1 className="font-bold text-center text-2xl">All products</h1>
      {/* Item Card */}
      {
        loading ? 
          <div className="m-64 flex justify-center items-center">
            <Loader />
          </div> 
        : 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-18 lg:p-16 p-4">
            {
              products?.map((item) => (
                <ProductCard key={item.id} singleProduct={item} />
              ))
            }
          </div>
      }
    </div>
  )
}

export default AllProducts