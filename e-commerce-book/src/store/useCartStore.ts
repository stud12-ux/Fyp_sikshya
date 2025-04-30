import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  pdf: string;
  desc: string;
};

type CartBookItem = {
  id: string;
  name: string;
  image: string;
  desc: string;
};

type CartProduct = CartItem | CartBookItem;

type CartState = {
  items: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        if (existingItem) {
          console.log("Item already exists in cart");
          return;
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeFromCart: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
