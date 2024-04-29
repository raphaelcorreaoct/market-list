
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import DrawableMenu from "../_components/drawablemenu";
import { httpClient } from "@/services/httpClient";

export default async function List(props) {

  const id = props.params.id;
  const { data } = await httpClient.get(`/list/${id}`);


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
          {data.list.products?.map((item) => (
            <TableRow key={item.id}>
              <TableHead>{item.name}</TableHead>
              <TableHead>{item.quantity}</TableHead>
              <TableHead>{item.price}</TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <DrawableMenu id={id}/>
    </div>
  );

}


