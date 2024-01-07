import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  image: string;
  titre: string;
  price: number;
  quantity: number;
}

// Define the type for the state
interface CartState {
  items: CartItem[]; // Replace with your actual item type
}

// Define the initial state
const initialState: CartState = {
  items: [],
};

// Create a slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemId = action.payload.id;
      const cartItems = state.items;
      const indexEl = cartItems.findIndex(item => item.id == itemId);
      if(indexEl !== -1){
        cartItems[indexEl].quantity += 1 
      }else {
        state.items.push(action.payload);

      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    updateItem: (
      state,
      action: PayloadAction<{id: number; quantity: number}>,
    ) => {
      const cartItems = state.items;

      const indexEl = cartItems.findIndex(item => item.id == action.payload.id);
      cartItems[indexEl].quantity = action.payload.quantity;
      state.items = cartItems;
    },
    clear: state => {
      state.items = [];
    },
  },
});

// Export the actions and reducer
export const {addItem, removeItem,updateItem, clear} = cartSlice.actions;
export default cartSlice.reducer;