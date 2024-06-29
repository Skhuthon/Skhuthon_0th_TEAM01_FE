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

export const mutateCaffeine = async ({ caffeine }: { caffeine: number }) => {
  const response = await axiosClient.patch<{
    todayCaffeineIntakeAmount: number;
    canCaffeineIntakeAmount: number;
  }>(`/product/update/caffeine?caffeine=${caffeine}`);

  return response.data;
};

export const getRandomCoffee = async () => {
  const response = await axiosClient.get<{
    brand: string;
    menu: string;
    caffeine: number;
  }>('/product/recommend');

  return response.data;
};
