import { useQuery } from "react-query";
import { envClientSchema } from "../../../envSchema";
import { Product, IClient, Client } from "../../client/client";

const getProductByIdQuery = async (id: number): Promise<Product> => {
  const client: IClient = new Client(envClientSchema.REACT_APP_BASE_URL);
  const products = await client.products(id);

  return products;
}

export function useGetProductByIdQuery(id: number) {
  return useQuery<Product, Error>({
    queryKey: ['product'],
    queryFn: () => getProductByIdQuery(id)
  })
}