import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemsState {
  items: string[];
  showDialog: boolean;
  dontAskAgain: boolean;
}

const initialState: ItemsState = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12'],
  showDialog: true,
  dontAskAgain: false,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Remove multiple items by indices
    removeItems: (state, action: PayloadAction<number[]>) => {
      state.items = state.items.filter((_, index) => !action.payload.includes(index));
    },
    // Toggle the dialog visibility
    toggleDialog: (state, action: PayloadAction<boolean>) => {
      state.showDialog = action.payload;
    },
    // Set whether the dialog should be shown again or not
    setDontAskAgain: (state, action: PayloadAction<boolean>) => {
      state.dontAskAgain = action.payload;
    },
  },
});

export const { removeItems, toggleDialog, setDontAskAgain } = itemsSlice.actions;
export default itemsSlice.reducer;
