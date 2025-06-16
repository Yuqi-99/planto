import { ReviewCard } from './ReviewCard';
import { SectionTitle } from './SectionTitle';

export const CustomerReview = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center px-6'>
			<SectionTitle title='Customer Review' />

			<div className='mt-20 grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-y-20'>
				<ReviewCard
					img='../avatar/avatar1.png'
					name='Maln Josi'
					comment='The attention to detail and quality of work exceeded my expectations. Highly recommended!'
				/>
				<ReviewCard
					img='../avatar/avatar2.png'
					name='Alina Thakur'
					comment='Incredible service and communication throughout the entire project. Would definitely work with them again.'
				/>
				<ReviewCard
					img='../avatar/avatar3.png'
					name='Max Makvana'
					comment='Very professional and delivered exactly what was promised. Minor delays but great overall.'
				/>
			</div>
		</div>
	);
};
