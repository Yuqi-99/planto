import { LongCard } from './LongCard';
import { SectionTitle } from './SectionTitle';

export const OurBestSection = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center px-6'>
			<SectionTitle title='Our Best o2' />
			<div className='mt-20'>
				<LongCard
					direction='left'
					img='../public/plant/show-plant.png'
					name='We Have Small And Best O2 Plants Collection’s'
					subtitle='Succulents in mint pots are simply irresistible! These little water-wise wonders are like living sculptures, each with their own unique personality. What I absolutely adore about them is their incredible resilience - they are practically indestructible! Perfect for busy plant parents or those who tend to forget watering schedules. Plus, they look absolutely stunning in modern minimalist settings.'
					buttonTitle='Explore'
					showAddToCart={false}
				/>
			</div>
		</div>
	);
};
