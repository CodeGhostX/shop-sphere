import { allProducts } from "@/app/server/action";
import Loader from "../Helper/Loader";
import ProductCard from "../Helper/ProductCard";

const AllProducts = async () => {
  const products = await allProducts();
  return (
    <div>
      <h1 className="font-bold text-center text-2xl">All Products</h1>
      {/* Item Card */}
      {
        !products ?
          <div className="m-64 flex justify-center items-center">
            <Loader/>
          </div> 
        : 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-18 lg:p-16 p-4">
            {
              products?.map((item:any) => (
                <ProductCard key={item.id} singleProduct={item} />
              ))
            }
          </div>
      }
    </div>
  )
}

export default AllProducts