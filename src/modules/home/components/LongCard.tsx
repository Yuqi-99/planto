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
}: LongCardProps) => {
	return (
		<div className='mb-20 w-full px-6'>
			<div className='w-full rounded-[72px] border-2 border-solid border-green-300 px-2 backdrop-blur-md'>
				<div className={cn('flex w-full', direction === 'right' && 'flex-row-reverse')}>
					<img
						src={img}
						alt={name}
						className={cn(showAddToCart ? '-mt-28 h-[350px]' : '-mt-36 h-[500px]')}
					/>
					{/* Details */}
					<div className='flex flex-col justify-center px-8 py-8'>
						<p className='text-xl text-white'>{name}</p>
						<p className='my-2 text-white'>{category}</p>
						<p className='line-clamp-2 text-xs text-grey-300'>{subtitle}</p>
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
