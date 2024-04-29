import { prisma } from "../../../../../prisma/prisma"


export async function GET(req: Request, { params }) {

  const list = await prisma.list.findUnique({
    where: { id: params.id, userId: 'a9f98567-35fd-47b3-8151-e46cf6db28ab' },
    include: {
      products: true
    }
  })

  return Response.json({
    list
  }, { status: 200 })

}


export async function PUT(req: Request, { params }) {
  const body = await req.json()
  const list = await prisma.list.update({
    where: { id: params.id },
    data: { ...body, userId: 'a9f98567-35fd-47b3-8151-e46cf6db28ab' }
  });



  return Response.json(list, { status: 200 })

}

export async function DELETE(req: Request, { params }) {

  const list = await prisma.list.delete({
    where: { id: params.id },
  })

  return Response.json(list, { status: 200 })

}

export async function POST(req: Request, { params }) {
  const id = params.id;
  const body = await req.json()

  let product = body;


  if (!body?.id) {
    console.log('Bateu no create product')
    product = await prisma.product.create({
      data: {...body, quantity: Number(body.quantity),price: Number(body.price), userId: 'a9f98567-35fd-47b3-8151-e46cf6db28ab'}
    })
  }


  const oldlist = await prisma.list.findFirst({where: {id}});
  delete oldlist?.id;

  const list = await prisma.list.update({
    where: {id},
    data: {
      ...oldlist,
      products: {create: [
        {
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          userId: product.userId
        }
      ]}
    }
  });

  return Response.json(list, { status: 200 })

}