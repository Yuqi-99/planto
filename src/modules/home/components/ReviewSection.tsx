import { ReviewCard } from './ReviewCard';

export const ReviewSection = () => {
	return (
		<div className='px-6'>
			<div className='mt-20 md:mt-36'>
				<ReviewCard
					img=''
					name='Alina Patel'
					comment='Very satisfied with the results. Professional and efficient service. The team
					professionalism and efficiency were evident throughout the project. We were satisfied with
					the final product, which met our expectations. Their ability to deliver a high-quality
					product efficiently was impressive, and we would consider working with them again in the
					future.'
					showBgColor={false}
				/>
			</div>
		</div>
	);
};
