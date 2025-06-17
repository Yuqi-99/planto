import CartIcon from '../../../shared/assets/cart-icon.svg?react';
import { cn } from '../../../shared/utils/cn';
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
	return (
		<div className='mb-20 w-full px-6'>
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
								? '-mt-14 h-[300px] w-[300px] sm:-mt-14 sm:h-[280px] md:-mt-28 md:h-[350px]'
								: // : '-mt-20 h-[280px] sm:-mt-28 sm:h-[400px] lg:-mt-36 lg:h-[500px]'
									'h-[280px] sm:h-[400px] lg:h-[500px]'
						)}
					/>
					{/* Details */}
					<div
						className={cn(
							'flex flex-col justify-center px-8 sm:py-8',
							showAddToCart ? 'pb-8' : 'py-8'
						)}
					>
						<p className='text-xl text-white'>{name}</p>
						<p className='my-2 text-white'>{category}</p>
						<p
							className={cn(
								'text-xs text-grey-300',
								showAddToCart ? 'line-clamp-1 sm:line-clamp-2' : 'line-clamp-4'
							)}
						>
							{subtitle}
						</p>
						{price && <p className='my-2 text-xl text-white'>RM {price}</p>}

						<div className='flex'>
							<button
								type='button'
								className='mt-3 w-fit rounded-lg border border-solid border-white px-4 py-2 text-white hover:bg-grey-600'
							>
								<p className='text-sm font-light text-white'>{buttonTitle}</p>
							</button>
							{showAddToCart && (
								<button
									type='button'
									className='ml-3 mt-3 w-fit rounded-lg border border-solid border-white px-2 py-2 text-white hover:bg-grey-600'
								>
									<CartIcon className='size-5' />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
