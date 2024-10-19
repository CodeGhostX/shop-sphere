import {getAllCategories} from "@/Request/getAllCategories";

const Category = async () => {
  const categories:string[] = await getAllCategories();
  return (
    <div className="flex flex-col justify-center items-center p-10 mt-36 lg:mt-0">
      <h1 className="font-bold text-center text-2xl">Shop By Category</h1>
      <div className="grid-cols-2 lg:grid-cols-4 mt-12">
        {
          categories.map((item:string, idx:number)=>(
            <button key={idx} className="lg:text-2xl lg:py-4 p-2 m-2 lg:m-6 px-8 rounded-lg border hover:text-yellow-300 hover:bg-slate-100 hover:border-yellow-500 border-black bg-gray-200 capitalize">{item}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Category