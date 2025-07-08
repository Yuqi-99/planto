import { create } from 'zustand';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { getLocalStorage, setLocalStorage } from '../utils/getSetStorage';

export type TcartItem = {
	img: string;
	name: string;
	price: number;
	quantity: number;
	total: number;
};

type CartState = {
	toastContent: {
		message: string;
		add: boolean;
	};
	setToastContent: (toastContent: { message: string; add: boolean }) => void;
	showToast: boolean;
	setShowToast: (value: boolean) => void;
	cart: TcartItem[];
	setCart: (cart: TcartItem) => void;
	removeFromCart: (name: string) => void;
	resetCart: () => void;
};

const getInitialCart = (): TcartItem[] => {
	const stored = getLocalStorage(STORAGE_KEYS.CART);
	return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create<CartState>((set) => ({
	toastContent: {
		message: '',
		add: true,
	},
	setToastContent: (toastContent: { message: string; add: boolean }) => {
		set({ toastContent });
	},
	showToast: false,
	setShowToast: (value: boolean) => set({ showToast: value }),
	cart: getInitialCart(),
	setCart: (item: TcartItem) =>
		set((prev) => {
			const existingItem = prev.cart.find((cartItem) => cartItem.name === item.name);
			let updatedCart;

			if (existingItem) {
				updatedCart = prev.cart.map((cartItem) =>
					cartItem.name === item.name
						? { ...cartItem, quantity: item.quantity, total: item.total }
						: cartItem
				);
			} else {
				updatedCart = [...prev.cart, item];
			}

			setLocalStorage(STORAGE_KEYS.CART, JSON.stringify(updatedCart));
			return { cart: updatedCart };
		}),

	removeFromCart: (name: string) =>
		set((prev) => {
			const updatedCart = prev.cart.filter((cartItem) => cartItem.name !== name);
			setLocalStorage(STORAGE_KEYS.CART, JSON.stringify(updatedCart));
			return { cart: updatedCart };
		}),

	resetCart: () => {
		localStorage.removeItem(STORAGE_KEYS.CART);
		set({ cart: [] });
	},
}));
