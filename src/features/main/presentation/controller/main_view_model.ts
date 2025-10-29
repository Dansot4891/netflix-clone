import { useEffect, useState } from "react";
import { GetHomeDataUseCase } from "../../domain/use_case/get_home_data_use_case";
import type { HomeData } from "../../data/dto/home_data";


export function MainViewModel() {
    const [homeData, setHomeData] = useState<HomeData[]>([]);
    const [loading, setLoading] = useState(false);
    const [showCard, setShowCard] = useState<HomeData | null>(null);

    const getHomeData = async () => {
        setLoading(true);
        try {
            const homeData = await new GetHomeDataUseCase().execute();
            setHomeData(homeData);
        } catch (error) {
            console.log('get home data error', error);
        } finally {
            setLoading(false);
        }
    };

    const setShowCardData = (item: HomeData | null) => {
        setShowCard(item);
    };

    useEffect(() => {
        getHomeData();
    }, []);

    return { homeData, loading, getHomeData, showCard, setShowCardData };
}
