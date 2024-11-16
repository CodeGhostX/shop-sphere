"use server"

import prisma from "@/lib/client";
const bcrypt = require("bcryptjs");

// All Products
export const allProducts = async ()=>{
  const response = await prisma.product.findMany();
  return response;
}

// Sign Up
export const signUp = async (user:any)=>{
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const response = await prisma.user.create({
    data:{
      fullName:user.fullName,
      email:user.email,
      password:hashedPassword,
      gender:user.gender
    }
  })
  return response;
}

// Single Product
export const getSingleProduct = async (id:string)=>{
  const response = await prisma.product.findUnique({
    where:{
      id:id
    }
  });
  return response;
}

// Add Product
export const addProduct = async (item:any)=>{
  const response = await prisma.product.create({
    data:item
  })
  return response;
}

// All Users
export const allusers = async ()=>{
  const response = await prisma.user.findMany();
  return response;
}

// Users Count
export const usersCount = async ()=>{
  const totalUsers = await prisma.user.count();
  return totalUsers;
}

// Product Count
export const productCount = async ()=>{
  const totalProducts = await prisma.product.count();
  return totalProducts;
}

