// domain/usecases/login.usecase.ts
import type { HomeData } from "../../data/dto/home_data";
import { homeRepo } from "../../domain/repo/home_repo";

export class GetHomeDataUseCase {
    constructor() { }

    async execute(): Promise<HomeData[]> {
        return await homeRepo.getHomeData();
    }
}