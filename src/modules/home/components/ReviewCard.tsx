import PlantoIcon from '../../../shared/assets/planto-logo.svg?react';
import { AnimatedContent } from '../../../shared/components/AnimatedContent';
import { cn } from '../../../shared/utils/cn';
import { Rating } from './Rating';

type TReviewCard = {
	img?: string;
	name: string;
	comment: string;
	showBgColor?: boolean;
};

export const ReviewCard = ({ img, name, comment, showBgColor = true }: TReviewCard) => {
	return (
		<AnimatedContent
			className={cn(
				'w-full rounded-[36px] border-2 border-solid border-green-300 p-4 backdrop-blur-sm md:w-fit md:max-w-[400px] md:p-6',
				showBgColor && 'bg-green-700'
			)}
		>
			<div className='flex items-center'>
				{img ? (
					<img src={img} alt={name} className='size-6 rounded-full md:size-10' />
				) : (
					<PlantoIcon className='size-6 md:size-10' />
				)}

				<div className='ml-2 flex w-full flex-col items-start justify-center'>
					<p className='w-full text-sm text-white md:text-lg'>{name}</p>
					<Rating />
				</div>
			</div>
			<p className='mt-3 line-clamp-2 text-xs text-grey-300 md:mt-6'>{comment}</p>
		</AnimatedContent>
	);
};
