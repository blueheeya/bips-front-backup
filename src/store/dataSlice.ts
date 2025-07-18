<<<<<<< HEAD
//API 데이터
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('/api_json_20250716/programs.json');
    return await response.data;
});
// 로그 데이터를 menuId 기준으로 fetch
export const fetchLogDataById = createAsyncThunk(
    'data/fetchLogDataById',
    async (menuId: string) => {
        const res = await fetch(`/api/logs/${menuId}`);
        const json = await res.json();
        return { menuId, data: json };
    },
);
export interface DataState {
    data: any[];
    logData: Record<string, any>;
    selectedMenu: { id: string; name: string } | null;
    loading: boolean;
    hostname: string | null;
=======
// src/store/dataSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProgramItem {
    program_id: string;
    program_name: string;
    is_always: boolean;
}

interface Server {
    hostname: string;
    program_list: ProgramItem[];
}

interface LogData {
    hostname: string;
    program_id: string;
    log: string;
    chunk_index: number;
    chunk_total: number;
}

interface DataState {
    servers: Server[];
    selectedHostname: string | null;
    selectedProgramId: string | null;
    logData: LogData | null;
    loading: boolean;
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
    error: string | null;
}

const initialState: DataState = {
<<<<<<< HEAD
    data: [],
    logData: {},
    selectedMenu: null,
    loading: false,
    hostname: null,
=======
    servers: [],
    selectedHostname: '',
    selectedProgramId: '',
    logData: null,
    loading: false,
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
    error: null,
};

// 서버 리스트 불러오기
export const fetchServerData = createAsyncThunk(
    'data/fetchServerData',
    async () => {
        const res = await axios.get(
            '/api_json_20250716//api_json_20250716/programs',
        );
        return res.data;
    },
);

// 로그 불러오기
export const fetchLogData = createAsyncThunk(
    '/api_json_20250716//api_json_20250716/programs',
    async (params: { hostname: string; programId: string }) => {
        const res = await axios.get('/api/logs/', {
            params: {
                hostname: params.hostname,
                program_id: params.programId,
            },
        });
        return res.data;
    },
);

const dataSlice = createSlice({
    name: 'data',
<<<<<<< HEAD
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
        setSelectedMenu(state, action) {
            state.selectedMenu = action.payload;
=======
    initialState: initialState,
    // initialState: {
    //     serverData: [],
    //     logData: null,
    //     selectedHostname: '',
    //     selectedProgramId: '',
    //     loading: false,
    //     error: null,
    // },
    reducers: {
        setSelectedHostname(state, action) {
            state.selectedHostname = action.payload;
        },
        setSelectedProgramId(state, action) {
            state.selectedProgramId = action.payload;
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServerData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchServerData.fulfilled, (state, action) => {
                state.loading = false;
                state.servers = action.payload;
            })
<<<<<<< HEAD
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message || '데이터 로딩 실패';
                state.loading = false;
                console.error('fetchData 실패:', action.error);
            })
            .addCase(fetchLogDataById.fulfilled, (state, action) => {
                const { menuId, data } = action.payload;
                state.logData[menuId] = data;
=======
            .addCase(fetchServerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? '서버 데이터 오류';
            })
            .addCase(fetchLogData.fulfilled, (state, action) => {
                state.logData = action.payload;
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
            });
    },
});

<<<<<<< HEAD
export const { setData, setSelectedMenu } = dataSlice.actions;
=======
export const { setSelectedHostname, setSelectedProgramId } = dataSlice.actions;
>>>>>>> a7c4b026c23d7989542a0681288399a510fe4d21
export default dataSlice.reducer;
