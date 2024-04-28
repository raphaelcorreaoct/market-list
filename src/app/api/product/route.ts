import { prisma } from "../../../../prisma/prisma";

export async function GET (req: Request) {
  const products = await prisma.Products.findMany()

  return Response.json({
    products
  },{status: 200})

}


export async function POST (req: Request) {
  const body = await req.json()
  const product = await prisma.Products.create({
     data: body
   })

  return Response.json(product,{status: 200})

}