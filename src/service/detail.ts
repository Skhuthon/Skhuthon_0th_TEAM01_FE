import { axiosClient } from '../axiosClient';
export const getAllProduct = async () => {
  const response = await axiosClient.get<{ brands: string[] }>('/product');

  return response.data;
};

export const getAllMenu = async ({ brand }: { brand: string }) => {
  const response = await axiosClient.get<{ menu: string[] }>(
    `/product/menu?brand=${brand}`
  );
  return response.data;
};

export const getMenuByQuery = async ({ keyword }: { keyword: string }) => {
  const response = await axiosClient.get<{
    products: {
      id: number;
      brand: string;
      menu: string;
      caffeine: number;
    }[];
  }>(`/product/search?keyword=${keyword}`);
  return response.data;
};

export const getCaffeine = async ({
  brand,
  menu,
}: {
  brand: string;
  menu: string;
}) => {
  const response = await axiosClient.get<{ caffeine: number }>(
    `/product/caffeine?brand=${brand}&menu=${menu}`
  );
  return response.data;
};
