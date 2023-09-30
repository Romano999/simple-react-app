import { useQuery } from "react-query";
import { envClientSchema } from "../../../envSchema";
import { Product, IClient, Client } from "../../client/client";

const getAllProductsQuery = async (): Promise<Product[]> => {
  const client: IClient = new Client(envClientSchema.REACT_APP_BASE_URL);
  const products = await client.all();

  return products;
}

export function useGetAllProductsQuery() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: () => getAllProductsQuery()
  })
}