import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";

export const mainApi = {
    getHomeData: () => {
        const q = query(
            collection(db, "home"),
            where("url", "!=", null)
        );
        return getDocs(q);
    }
};