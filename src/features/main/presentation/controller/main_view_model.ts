import type { HomeData } from "../../data/dto/home_data";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MainState } from "./main_state";
import { GetHomeDataUseCase } from "../../domain/use_case/get_home_data_use_case";

const initialState: MainState = { homeData: [], loading: false, showCard: null, initialize: false };

// 비동기 로직은 여기서! (reducer 밖에서)
export const getHomeData = createAsyncThunk(
    "main/getHomeData",
    async () => {
        const homeData = await new GetHomeDataUseCase().execute();
        return homeData;
    }
);

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setLoading: (s) => { s.loading = true; },
        setShowCard: (s, a: PayloadAction<HomeData | null>) => { s.showCard = a.payload; },
    },
    // 비동기 액션 처리는 여기서!
    extraReducers: (builder) => {
        builder
            .addCase(getHomeData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.homeData = action.payload;
                state.initialize = true;
            })
            .addCase(getHomeData.rejected, (state, action) => {
                state.loading = false;
                console.log('get home data error', action.error);
            });
    },
});

export const { setLoading, setShowCard } = mainSlice.actions;
export default mainSlice.reducer;