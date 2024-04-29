'use client';
import ProductList from "@/app/components/productList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { httpClient } from "@/services/httpClient";
import {  useState } from "react";

export default function DrawableMenu({id}) {


  const [formValues, setFormValues] = useState({
    name: '',
    quantity: '',
    price: ''
  });


  const onChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSave = () => {
    httpClient.post(`/list/${id}`, formValues);
  }


  return (<Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Criar um novo produto</SheetTitle>
        <SheetDescription>
         Crie novos produtos para sua lista de mercado.
        </SheetDescription>
      </SheetHeader>

      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input id="name" name="name" value={formValues.name} onChange={onChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="quantity" className="text-right">
            Quantidade
          </Label>
          <Input id="quantity" name="quantity"  value={formValues.quantity} onChange={onChange} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Preço
          </Label>
          <Input id="price"  name="price" value={formValues.price} onChange={onChange} className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button onClick={onSave}>Salvar</Button>
        </SheetClose>
      </SheetFooter>
      <ProductList />
    </SheetContent>
  </Sheet>);
}
