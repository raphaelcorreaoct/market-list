import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import DrawableMenu from "./_components/drawablemenu";
import { Button } from "@/components/ui/button";
import { httpClient } from "@/services/httpClient";

type CardProps = React.ComponentProps<typeof Card>

export default async function ShowList({ className, ...props }: CardProps) {

  const { data } = await httpClient.get('/list');

  return (
    <div className="max-w-[600px] m-auto">
      <DrawableMenu/>
      {data.list?.map((item) => (
        <Card className={cn("w-[290px]", className)} {...props} key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <div className="flex">
              <Button>Deletar</Button>
              <Button>Adicionar Produtos</Button>
            </div>
          </CardFooter>
        </Card>
       
      ))}
    </div>
  );
}
