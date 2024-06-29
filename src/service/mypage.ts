import { axiosClient } from '../axiosClient';
export const getMyPage = async () => {
  const response = await axiosClient.get<{
    name: string;
    email: string;
    profile: string;
    role: string;
    todayCaffeineIntakeAmount: number;
    canCaffeineIntakeAmount: number;
  }>('/mypage');
  return response.data;
};
