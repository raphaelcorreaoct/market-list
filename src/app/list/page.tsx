
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from 'axios';

export default async function List({}) {
  const {data} = await axios.get('http://localhost:3000/api/product');
  const products = data??[];

  return (
    <div className="max-w-[600px] m-auto">
    <Table>
      <TableCaption>Lista de produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead>Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.products?.map((item)=> (
          <TableRow key={item.id}>
            <TableHead>{item.name}</TableHead>
            <TableHead>{item.quantity}</TableHead>
            <TableHead>{item.price}</TableHead>
        </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );

}


