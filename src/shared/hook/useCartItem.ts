/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '../stores/useCartStore';

type useAddToCartAnimationProps = {
	imgRef?: React.RefObject<HTMLImageElement | null>;
};

type UseCartItemProps = {
	name: string;
	price: number;
	img: string;
	// quantity?: number;
	from?: string;
	// imgRef?: React.RefObject<HTMLImageElement | null>;
};

// export const handleAddToCart = ({ imgRef }: useAddToCartAnimationProps) => {
// 	const cart = document.getElementById('cart-icon');
// 	const img = imgRef?.current;

// 	if (!cart || !img) return;

// 	const cartRect = cart.getBoundingClientRect();
// 	const imgRect = img.getBoundingClientRect();

// 	// 克隆图片
// 	const flyingImg = img.cloneNode(true) as HTMLImageElement;
// 	flyingImg.style.position = 'fixed';
// 	flyingImg.style.left = imgRect.left + 'px';
// 	flyingImg.style.top = imgRect.top + 'px';
// 	flyingImg.style.width = imgRect.width + 'px';
// 	flyingImg.style.height = imgRect.height + 'px';
// 	flyingImg.style.transition = 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
// 	flyingImg.style.zIndex = '9999';

// 	document.body.appendChild(flyingImg);

// 	// 计算差值 (终点中心 - 起点中心)
// 	const deltaX = cartRect.left + cartRect.width / 2 - (imgRect.left + imgRect.width / 3);
// 	const deltaY = cartRect.top + cartRect.height - (imgRect.top + imgRect.height / 2);

// 	// 开始动画
// 	requestAnimationFrame(() => {
// 		flyingImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
// 		flyingImg.style.opacity = '0.5';
// 	});

// 	// 动画结束后删除
// 	flyingImg.addEventListener('transitionend', () => {
// 		flyingImg.remove();
// 	});
// };

export const handleAddToCart = ({ imgRef }: useAddToCartAnimationProps) => {
	const cart = document.getElementById('cart-icon');
	const img = imgRef?.current;

	if (!cart || !img) return;

	const cartRect = cart.getBoundingClientRect();
	const imgRect = img.getBoundingClientRect();

	// 页面滚动偏移
	const scrollX = window.scrollX || document.documentElement.scrollLeft;
	const scrollY = window.scrollY || document.documentElement.scrollTop;

	// 克隆图片
	const flyingImg = img.cloneNode(true) as HTMLImageElement;
	flyingImg.style.position = 'absolute';
	flyingImg.style.left = imgRect.left + scrollX + 'px';
	flyingImg.style.top = imgRect.top + scrollY + 'px';
	flyingImg.style.width = imgRect.width + 'px';
	flyingImg.style.height = imgRect.height + 'px';
	flyingImg.style.transition = 'transform 0.9s ease-in-out, opacity 0.7s ease-in-out';
	flyingImg.style.zIndex = '9999';

	document.body.appendChild(flyingImg);

	// 起点中心 (绝对坐标)
	const imgCenterX = imgRect.left + scrollX + imgRect.width / 2;
	const imgCenterY = imgRect.top + scrollY + imgRect.height / 2;

	// 终点中心 (绝对坐标)
	const cartCenterX = cartRect.left + scrollX + cartRect.width / 2;
	const cartCenterY = cartRect.top + scrollY + cartRect.height / 2;

	// 差值 (translate 移动)
	const deltaX = (cartCenterX - imgCenterX) * 1.3;
	const deltaY = cartCenterY - imgCenterY;

	console.log(imgCenterX, imgCenterY, cartCenterX, cartCenterY, deltaX, deltaY, '111');

	// 动画执行
	requestAnimationFrame(() => {
		flyingImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
		flyingImg.style.opacity = '0';
	});

	// 动画结束清理
	flyingImg.addEventListener('transitionend', () => {
		flyingImg.remove();
	});
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
