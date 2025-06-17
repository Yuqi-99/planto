import CartIcon from '../../../shared/assets/cart-icon.svg?react';
import { cn } from '../../../shared/utils/cn';

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
	price,
	imgClassName,
	showBgColor = true,
}: TCard) => {
	console.log(id, 'id');
	return (
		<div
			className={cn(
				'h-fit w-[250px] rounded-[36px] border-2 border-solid border-green-300 p-2 backdrop-blur-md sm:w-[240px] lg:w-[320px] lg:p-6',
				showBgColor && 'bg-green-700'
			)}
		>
			<div className='flex h-full flex-col'>
				<div className='flex justify-center'>
					<img src={img} alt={name} className={cn('-mt-20 lg:-mt-24', imgClassName)} />
				</div>
				<div className='mt-6 flex flex-col px-6'>
					<p className='text-xs font-extralight text-grey-300'>{category}</p>
					<p className='mt-3 line-clamp-1 text-xl font-light text-grey-300' title={name}>
						{name}
					</p>
					{!showPrice && (
						<button
							type='button'
							className='mt-3 w-1/2 rounded-lg border border-solid border-grey-300 px-2 py-2 hover:bg-grey-600 hover:text-white'
						>
							<p className='text-sm font-light text-grey-300'>Buy Now</p>
						</button>
					)}
					{showPrice && (
						<div className='flex w-full flex-row items-center justify-between'>
							<p className='my-2 text-lg font-light text-grey-300'>RM {price}</p>
							<button
								type='button'
								className='w-fit rounded-lg border border-solid border-grey-300 p-1.5 text-white hover:bg-grey-600'
							>
								<CartIcon className='size-5' />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
