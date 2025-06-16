import PlantoIcon from '../../../shared/assets/planto-logo.svg?react';
import { Rating } from './Rating';

type TReviewCard = {
	img?: string;
	name: string;
	comment: string;
};

export const ReviewCard = ({ img, name, comment }: TReviewCard) => {
	return (
		<div className='w-full rounded-[36px] border-2 border-solid border-green-300 p-6 backdrop-blur-sm md:w-fit'>
			<div className='flex items-center'>
				{img ? (
					<img src={img} alt={name} className='h-10 w-10 rounded-full' />
				) : (
					<PlantoIcon className='size-10' />
				)}

				<div className='ml-2 flex flex-col items-center justify-center'>
					<p className='text-lg text-white'>{name}</p>
					<Rating />
				</div>
			</div>
			<p className='mt-6 line-clamp-2 text-xs text-grey-300'>{comment}</p>
		</div>
	);
};
