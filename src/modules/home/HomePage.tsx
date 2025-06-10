import { CardSwiper } from './components/CardSwiper';
import { HomeTextSection } from './components/HomeTextSection';

export const HomePage = () => {
	return (
		<div className='flex h-fit min-h-screen items-center justify-center'>
			<div className='flex h-fit min-h-screen w-full justify-center bg-topiary-green-pot bg-cover bg-no-repeat'>
				<div className='relative flex w-full max-w-[1440px]'>
					{/* Home Text Section */}
					<HomeTextSection />
					<CardSwiper />
				</div>
			</div>
		</div>
	);
};
