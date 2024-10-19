import axios from "axios";

export const getAllCategories = async ()=>{
  const result = await axios.get("https://fakestoreapi.com/products/categories");
  return result.data;
}

export const allProducts = async ()=>{
  const result = await axios.get("https://fakestoreapi.com/products");
  return result.data;
}

export const singleProduct = async (id:string)=>{
  const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return result.data;
}

export const productsByCategory = async (category:string)=>{
  const result = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return result.data;
}