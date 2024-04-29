import axios from "axios";
import { ProductAfterMap } from "../interfaces/Product/ProductAfterMap";
import { productMapper } from "../mappers/ProductMapper";
import { ProductResponse } from "../interfaces/Product/ProductResponse";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  headers: {
    "content-type": "application/json",
  },
});

const getProducts = async (): Promise<ProductAfterMap[]> => {
  const { data } = await api.get<ProductResponse>(`/products`, {
    params: {
      page: 1,
      rows: 8,
      sortBy: "id",
      orderBy: "ASC",
    },
  });
  const response = productMapper(data.products);
  return response;
};

export default { getProducts };
