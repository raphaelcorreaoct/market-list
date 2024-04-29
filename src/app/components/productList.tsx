'use client'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { httpClient } from "@/services/httpClient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProductList() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(()=> {
    (async()=> {
      const {data} = await httpClient.get('/product');
      setProducts(data.products);
    })()
  }, []);

  const onSave = (item) => {
    httpClient.post(`/list/${params.id}`, item);
  }


  return (
  <ScrollArea className="h-72  rounded-md border mt-6">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-bold leading-none">Outros Produtos</h4>
      
      {products.map((item) => (
        <>
          <Button variant='link' key={item.id} className="text-sm" onClick={()=> onSave(item)}>
            {item.name}
          </Button>
          <Separator className="my-2" />
        </>
      ))}
    </div>
  </ScrollArea>);
}
