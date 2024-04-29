import { prisma } from "../../../../prisma/prisma";

export async function GET (req: Request) {
  const list = await prisma.list.findMany()

  return Response.json({
    list
  },{status: 200})

}


export async function POST (req: Request) {
  const body = await req.json()
  const list = await prisma.list.create({
     data: {...body, userId: 'a9f98567-35fd-47b3-8151-e46cf6db28ab'}
   })

  return Response.json(list,{status: 200})

}