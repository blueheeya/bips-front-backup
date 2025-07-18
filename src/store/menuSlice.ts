import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Menu {
    id: string;
    name: string;
    iconName: string;
    data?: any;
}

interface MenuState {
    menuList: Menu[];
    selectedMenu: Menu | null;
}

const initialState: MenuState = {
    menuList: [],
    selectedMenu: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenus(state, action: PayloadAction<Menu[]>) {
            state.menuList = action.payload;
        },
        selectMenu(state, action: PayloadAction<Menu>) {
            state.selectedMenu = action.payload;
        },
    },
});

export const { setMenus, selectMenu } = menuSlice.actions;
export default menuSlice.reducer;
