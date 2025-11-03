import type { HomeData } from "../../data/dto/home_data";

export type MainState = { homeData: HomeData[]; loading: boolean; showCard: HomeData | null, initialize: boolean };
