import axios from "axios";

type FetchProductsType = {
  query: string,
  per_page: number,
}

export const getProducts = async ({ query, per_page }: FetchProductsType) => {

  const client_id = "h5sUodfjgaX4-5ZbDH9N-KLvYJ5P_gneOQfUdS5DgfE";

  const { data: { results } }: any = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id,
        query: query,
        per_page: per_page,
        orientation: 'portrait',
      },
    }
  );

  return results;
}