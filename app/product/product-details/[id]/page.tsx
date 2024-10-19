import AddtoCart from "@/components/Helper/add-to-cart";
import ProductCard from "@/components/Helper/ProductCard";
import { Button } from "@/components/ui/button";
import { productsByCategory, singleProduct } from "@/Request/getAllCategories"
import { Product } from "@/typing"
import Image from "next/image";

const singleProductPage = async ({params}:{params:{id:string}}) => {
  const id = params.id;
  const oneProduct:Product = await singleProduct(id);
  const categoryProducts:Product[] = await productsByCategory(oneProduct.category);
  return (
    <div>
      {/* Product Details Page */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-48 p-16">
        <div>
          <Image
            src={oneProduct.image}
            height={300}
            width={300}
            className="object-contain"
            alt={oneProduct.title}
          />
        </div>

        <div className="mt-12 lg:mt-0">
          <h1 className="text-4xl font-semibold">{oneProduct.title}</h1>
          <p className="text-yellow-400 text-xl">{oneProduct.rating.rate} ⭐ <span className="text-black">({oneProduct.rating.count} Reviews) </span></p>
          <hr className="h-px my-3 bg-gray-200 border-0"/>
          <p className="text-5xl text-green-400">${oneProduct.price}</p>
          <p className="text-gray-500 my-2">{oneProduct.description}</p>
          <p className="text-black text-xl">Category : <span className="text-blue-400 capitalize">{oneProduct.category}</span></p>
          <AddtoCart product={oneProduct}/>
        </div>
      </div>

      <h1 className="font-bold text-center text-2xl">Similar products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-18 lg:p-16 p-4">
        {
          categoryProducts?.map((item) => {
            if(String(item.id)!=id)
            return <ProductCard key={item.id} singleProduct={item} />
          })
        }
      </div>
    </div>
  )
}

export default singleProductPage