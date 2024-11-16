import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest){
  const body = await req.json();
  const response = await prisma.product.findUnique({
    where:{
      id:body.id
    }
  });
  return NextResponse.json(response);
}