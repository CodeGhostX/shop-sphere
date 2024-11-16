import { getSingleProduct } from "@/app/server/action";
import AddtoCart from "@/components/Helper/add-to-cart";
import Image from "next/image";

const singleProductPage = async ({params}:{params:{id:string}}) => {
  const oneProduct = await getSingleProduct(params.id);
  return (
    <div>
      {/* Product Details Page */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-48 p-16">
        <div>
          {oneProduct && <Image
            src={oneProduct?.image}
            height={300}
            width={300}
            className="object-contain"
            alt={oneProduct?.title}
          />}
        </div>

        <div className="mt-12 lg:mt-0">
          <h1 className="text-4xl font-semibold">{oneProduct?.title}</h1>
          <hr className="h-px my-3 bg-gray-200 border-0"/>
          <p className="text-5xl text-green-400">₹ {oneProduct?.price}</p>
          <p className="text-gray-500 my-2">{oneProduct?.description}</p>
          <p className="text-black text-xl">Category : <span className="text-blue-400 capitalize">{oneProduct?.category}</span></p>
          <AddtoCart product={oneProduct}/>
        </div>
      </div>

      <h1 className="font-bold text-center text-2xl">Similar products</h1>
      To be added soon...
    </div>
  )
}

export default singleProductPage