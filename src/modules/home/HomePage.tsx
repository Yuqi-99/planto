import { CardSwiper } from './components/CardSwiper';
import { LongCard } from './components/LongCard';
import { HomeTextSection } from './components/HomeTextSection';
import { ReviewSection } from './components/ReviewSection';
import { TopSelling } from './components/TopSelling';
import { CustomerReview } from './components/CustomerReview';
import { OurBestSection } from './components/OurBestSection';

export const HomePage = () => {
	return (
		<div className='flex h-fit min-h-screen flex-col items-center justify-center'>
			<div className='flex justify-center bg-topiary-green-pot bg-cover bg-center bg-no-repeat lg:bg-contain'>
				<div className='relative flex w-full max-w-[1440px] flex-col'>
					{/* Home Text Section */}
					<HomeTextSection />
					<CardSwiper />
					<ReviewSection />
					<div className='my-20 flex items-center justify-center'>
						<p className='text-2xl font-medium text-white md:text-3xl'>Our Trendy Plants</p>
					</div>
					<LongCard
						direction='left'
						img='../plant/desk-plant.png'
						name='Hosta'
						category='For Small Desk Ai Plant'
						subtitle='Ah, the Hosta - what a remarkable shade garden companion! I have seen these beauties transform the most challenging, shady spots into lush, textural wonderlands. Their rippling leaves come in the most incredible range of colors, from deep blue-green to bright chartreuse. What is really amazing is how they get more impressive each year, like a fine wine! Perfect for those looking to add some drama to their outdoor shade gardens.'
						price={399}
						buttonTitle='Buy Now'
						showBgColor={false}
					/>
					<LongCard
						direction='right'
						img='../plant/succulent.png'
						name='Succulent'
						category='For Small Desk Ai Plant'
						subtitle='Succulents in mint pots are simply irresistible! These little water-wise wonders are like living sculptures, each with their own unique personality. What I absolutely adore about them is their incredible resilience - they are practically indestructible! Perfect for busy plant parents or those who tend to forget watering schedules. Plus, they look absolutely stunning in modern minimalist settings.'
						price={369}
						buttonTitle='Buy Now'
						showBgColor={false}
					/>
				</div>
			</div>
			<div className='flex w-full max-w-[1440px]'>
				<TopSelling />
			</div>
			<div className='mt-20 w-full max-w-[1440px]'>
				<CustomerReview />
			</div>
			<div className='mt-20 w-full max-w-[1440px]'>
				<OurBestSection />
			</div>
		</div>
	);
};
