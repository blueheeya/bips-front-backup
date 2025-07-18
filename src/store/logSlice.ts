import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogData {
    hostname: string;
    program_id: string;
    log: string;
    chunk_index: number;
    chunk_total: number;
}

interface LogState {
    data: Record<string, LogData>; // program_id 기준
}

const initialState: LogState = {
    data: {},
};

const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setLogData(state, action: PayloadAction<LogData>) {
            const log = action.payload;
            state.data[log.program_id] = log;
        },
    },
});

export const { setLogData } = logSlice.actions;
export default logSlice.reducer;
