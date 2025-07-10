import { useEffect } from 'react';
import CartIcon from '../../../shared/assets/cart-icon.svg?react';
import { AnimatedContent } from '../../../shared/components/AnimatedContent';
import { GlareHover } from '../../../shared/components/GlareHover';
import { useCartItem } from '../../../shared/hook/useCartItem';
import { useCartStore } from '../../../shared/stores/useCartStore';
import { cn } from '../../../shared/utils/cn';
import { CartQuatityButton } from './CartQuatityButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../shared/constants/routes';
import { formatAmount } from '../../../shared/utils/formatAmount';
type LongCardProps = {
	direction: 'left' | 'right';
	img: string;
	name: string;
	category?: string;
	subtitle: string;
	price?: number;
	buttonTitle: string;
	showAddToCart?: boolean;
	showBgColor?: boolean;
};

export const LongCard = ({
	direction,
	img,
	name,
	price,
	category,
	subtitle,
	buttonTitle,
	showAddToCart = true,
	showBgColor = true,
}: LongCardProps) => {
	const navigate = useNavigate();
	const { setShowToast, setToastContent } = useCartStore();
	// const cartQuantity = cart?.find((item) => item.name === name)?.quantity;
	const { click, setClick, quantity, setQuantity, cartRef, existingItem } = useCartItem({
		name,
		price: price || 0,
		img,
		// quantity: cartQuantity,
	});

	const Wrapper = showBgColor ? AnimatedContent : 'div';

	useEffect(() => {
		if (click && quantity === 0) {
			setShowToast(true);
			setToastContent({ message: 'Item remove successfully to cart', add: false });
		}
	}, [quantity, click]);

	return (
		<Wrapper className='mb-20 w-full px-6'>
			<div
				className={cn(
					'w-full rounded-[72px] border-2 border-solid border-green-300 px-2 backdrop-blur-md',
					showBgColor && 'bg-green-700'
				)}
			>
				<div
					className={cn(
						'flex w-full flex-col items-center sm:flex-row',
						direction === 'right' && 'flex-col sm:flex-row-reverse'
					)}
				>
					<img
						src={img}
						alt={name}
						className={cn(
							showAddToCart
								? '-mt-14 h-[200px] w-[200px] sm:-mt-14 sm:h-[280px] sm:w-[280px] md:-mt-28 md:h-[350px]'
								: // : '-mt-20 h-[280px] sm:-mt-28 sm:h-[400px] lg:-mt-36 lg:h-[500px]'
									'h-[280px] sm:h-[400px] lg:h-[500px]'
						)}
					/>
					{/* Details */}
					<div
						className={cn(
							'flex flex-col justify-center px-4 sm:px-8 sm:py-8',
							showAddToCart ? 'pb-8' : 'py-8'
						)}
					>
						<p className='text-sm text-white sm:text-base md:text-xl'>{name}</p>
						<p className='my-2 text-white'>{category}</p>
						<p
							className={cn(
								'text-xs text-grey-300',
								showAddToCart ? 'line-clamp-1 sm:line-clamp-2' : 'line-clamp-4'
							)}
						>
							{subtitle}
						</p>
						{price && <p className='my-2 text-xl text-white'>RM {formatAmount(price)}</p>}

						<div className='flex'>
							<button
								type='button'
								className='mt-3 w-fit rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
								onClick={() => navigate(ROUTES.allPlants.path)}
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
									className='px-4 py-2'
								>
									<p className='text-sm font-light'>{buttonTitle}</p>
								</GlareHover>
								{/* <p className='text-sm font-light'></p> */}
							</button>
							{showAddToCart && click && (
								<CartQuatityButton
									className='ml-3 mt-3 flex w-fit cursor-pointer items-center justify-between rounded-lg border border-solid border-grey-300 px-2 py-2 text-white'
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
							)}
							{showAddToCart && !click && (
								<button
									type='button'
									className='ml-3 mt-3 w-fit rounded-lg border border-solid border-grey-300 px-2 py-2 text-white active:scale-105'
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
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
