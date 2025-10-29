// data/auth.repo.ts
import { mainApi } from "../../data/api/main_api";
import type { HomeData } from "../../data/dto/home_data";


export const homeRepo = {
  async getHomeData(): Promise<HomeData[]> {
    const homeData = await mainApi.getHomeData();
    return homeData.docs.map((doc) => doc.data() as HomeData);
  },
};