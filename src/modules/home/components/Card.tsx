import { useEffect } from 'react';
import CartIcon from '../../../shared/assets/cart-icon.svg?react';
import { AnimatedContent } from '../../../shared/components/AnimatedContent';
import { GlareHover } from '../../../shared/components/GlareHover';
import { useCartItem } from '../../../shared/hook/useCartItem';
import { useCartStore } from '../../../shared/stores/useCartStore';
import { cn } from '../../../shared/utils/cn';
import { CartQuatityButton } from './CartQuatityButton';

export type TCard = {
	category: string;
	id: number;
	img: string;
	name: string;
	showPrice?: boolean;
	price?: number;
	imgClassName?: string;
	showBgColor?: boolean;
};

export const Card = ({
	category,
	id,
	img,
	name,
	showPrice = false,
	price = 0,
	imgClassName,
	showBgColor = true,
}: TCard) => {
	console.log(id, 'id');
	const { setShowToast, setToastContent } = useCartStore();
	const { click, setClick, quantity, setQuantity, cartRef, existingItem } = useCartItem({
		name,
		price,
		img,
	});

	useEffect(() => {
		if (click && quantity === 0) {
			setShowToast(true);
			setToastContent({ message: 'Item remove successfully to cart', add: false });
		}
	}, [quantity, click]);

	return (
		<AnimatedContent
			className={cn(
				'h-fit w-[250px] rounded-[36px] border-2 border-solid border-green-300 p-2 backdrop-blur-md sm:w-[240px] lg:w-[320px] lg:p-6',
				showBgColor && 'bg-green-700'
			)}
		>
			<div className='flex h-full flex-col'>
				<div className='flex justify-center'>
					<img
						src={img}
						alt={name}
						className={cn('-mt-20 scale-75 sm:scale-100 lg:-mt-24', imgClassName)}
					/>
				</div>
				<div className='flex flex-col px-6 sm:mt-6'>
					<p className='text-xs font-extralight text-grey-300'>{category}</p>
					<p className='mt-3 line-clamp-1 text-lg font-light text-grey-300 md:text-xl' title={name}>
						{name}
					</p>
					{!showPrice && (
						<button
							type='button'
							className='mt-3 w-1/2 rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
						>
							<GlareHover
								glareColor='#ffffff'
								glareOpacity={0.3}
								glareAngle={-30}
								transitionDuration={800}
								playOnce={false}
								background='transparent'
								width='100%'
								height='100%'
								className='px-2 py-2'
							>
								<p className='text-sm font-light'>Buy Now</p>
							</GlareHover>
						</button>
					)}
					{showPrice && (
						<div className='flex w-full flex-row items-center justify-between'>
							<p className='my-2 text-lg font-light text-grey-300 sm:text-lg'>RM {price}</p>
							{click ? (
								<CartQuatityButton
									className='flex w-fit cursor-pointer items-center justify-between rounded-lg border border-solid border-grey-300 p-1.5 text-white'
									cartRef={cartRef}
									quantity={quantity}
									onBlur={() => setClick(false)}
									onAddClick={() => {
										if (quantity === 0 || existingItem === undefined) {
											setShowToast(true);
											setToastContent({ message: 'Item added successfully to cart', add: true });
										}
										setQuantity(quantity + 1);
									}}
									onMinusClick={() => {
										if (quantity > 0) {
											setQuantity(quantity - 1);
										}
									}}
								/>
							) : (
								<button
									type='button'
									className='w-fit rounded-lg border border-solid border-grey-300 p-1.5 text-white active:scale-105'
									onClick={() => {
										setClick(true);
										if (quantity === 0 || existingItem === undefined) {
											setQuantity(1);
										}
										setShowToast(true);
										setToastContent({ message: 'Item added successfully to cart', add: true });
									}}
								>
									<CartIcon className='size-5' />
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</AnimatedContent>
	);
};
