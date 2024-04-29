import { prisma } from "../../../../prisma/prisma";

export async function GET (req: Request) {
  const products = await prisma.product.findMany()

  return Response.json({
    products
  },{status: 200})

}


export async function POST (req: Request) {
  const body = await req.json()
  const product = await prisma.product.create({
     data: {...body, quantity: Number(body.quantity),price: Number(body.price), userId: 'a9f98567-35fd-47b3-8151-e46cf6db28ab'}
   })

  return Response.json(product,{status: 200})

}