import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '../stores/useCartStore';

type UseCartItemProps = {
	name: string;
	price: number;
	img: string;
	// quantity?: number;
	from?: string;
};

export const useCartItem = ({ name, price, img, from = '' }: UseCartItemProps) => {
	const cartRef = useRef<HTMLDivElement>(null);
	const [click, setClick] = useState(false);
	const [quantity, setQuantity] = useState(0);

	const { cart, setCart, removeFromCart } = useCartStore();
	const existingItem = cart.find((item) => item.name === name);

	// Handle outside click to close dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
				setClick(false);
			}
		};

		if (click) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [click]);

	// Handle cart logic
	useEffect(() => {
		if (click && quantity > 0) {
			setCart({ img, name, price, quantity, total: quantity * price });
		} else if (click && quantity === 0 && from === '') {
			removeFromCart(name);
		}
	}, [quantity, click, img, name, price, setCart, removeFromCart]);

	useEffect(() => {
		if (existingItem) {
			setQuantity(existingItem.quantity);
		}
	}, [existingItem]);

	return {
		cartRef,
		click,
		setClick,
		quantity,
		setQuantity,
		existingItem,
	};
};
