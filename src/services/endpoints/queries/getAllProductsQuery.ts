import axios from "axios";
import { useQuery } from "react-query";
import { Product, IClient, Client } from "../../client/client";

const getAllProductsQuery = async (): Promise<Product[]> => {
  const client: IClient = new Client("https://localhost:7057");
  const products = await client.getAllProductsEndpoint();

  return products;
}

export function useGetAllProductsQuery() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: () => getAllProductsQuery()
  })
}