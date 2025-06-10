import { useNavigate } from 'react-router-dom';
import PlantoLogo from '../assets/planto-logo.svg?react';
import { ROUTES } from '../constants/routes';

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className='flex min-h-56 w-full justify-center bg-footerBgColor p-8'>
			<div className='flex w-full max-w-[1440px] items-center justify-between flex-gap-x-4'>
				<div className='flex w-1/3 flex-col'>
					<div
						className='flex cursor-pointer items-center flex-gap-x-2'
						onClick={() => navigate(ROUTES.home.path)}
					>
						<PlantoLogo className='size-12' />
						<p className='text-2xl font-bold text-white'>Planto.</p>
					</div>
					<p className='mt-6 text-sm font-normal text-white'>
						Discover the perfect plants for your space at Planto. While major retailers like Home
						Depot, Lowe's, and Walmart offer basic plant selections, we provide expertly curated
						indoor and outdoor plants with specialized care guides and sustainable gardening
						solutions that go beyond what you'll find at typical garden centers. Our premium
						collection and personalized service make us your ideal alternative to big-box stores.
					</p>
				</div>

				<div className='flex w-1/5 flex-col'>
					<div className='mb-6 flex items-center flex-gap-x-2'>
						<p className='text-sm font-bold text-white'>Quick Link's</p>
					</div>
					<div className='flex h-1/2 flex-col justify-between'>
						<p className='text-xs font-normal text-white'>Home</p>
						<p className='text-xs font-normal text-white'>Type's Of plant's</p>
						<p className='text-xs font-normal text-white'>Contact</p>
						<p className='text-xs font-normal text-white'>Privacy</p>
					</div>
				</div>

				<div className='flex w-1/3 flex-col justify-between'>
					<div className='mb-6 flex flex-col justify-center flex-gap-x-2'>
						<p className='text-sm font-bold text-white'>For Every Update.</p>
					</div>
					<p className='text-sm font-bold text-white'>Enter your email</p>
					<p className='text-xs font-normal text-white'>planto © all right reserve</p>
				</div>
			</div>
		</div>
	);
};
