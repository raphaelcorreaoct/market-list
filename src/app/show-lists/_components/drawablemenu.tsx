'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import axios from "axios";
import { useState } from "react";

export default function DrawableMenu() {

  const [name, setName] = useState('')

  const onSave = () => {
    axios.post('http://localhost:3000/api/list', {
      name,
    })
  }

  return (
  <Sheet>
    <SheetTrigger>Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Criar uma nova Lista</SheetTitle>
      </SheetHeader>

      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nome
          </Label>
          <Input id="name" onChange={(event)=>setName(event.currentTarget.value)} value={name} className="col-span-3" />
        </div>
       
      </div>

      <SheetFooter>
        <SheetClose asChild>
          <Button onClick={onSave}>Salvar</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>);
}
