import { useNavigate } from 'react-router-dom';
import PlantoLogo from '../assets/planto-logo.svg?react';
import { ROUTES } from '../constants/routes';

export const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className='flex min-h-56 w-full justify-center bg-footerBgColor p-8'>
			<div className='flex w-full max-w-[1440px] flex-col items-center justify-between flex-gap-x-4 sm:flex-row'>
				<div className='flex w-full flex-col sm:w-1/3'>
					<div
						className='flex cursor-pointer items-center flex-gap-x-2'
						onClick={() => navigate(ROUTES.home.path)}
					>
						<PlantoLogo className='size-12' />
						<p className='text-2xl font-bold text-grey-300'>Planto.</p>
					</div>
					<p className='mt-6 text-xs font-light text-white'>
						Welcome to Planto – Your Trusted Destination for Beautiful, Healthy Plants. We offer a
						wide variety of indoor and outdoor plants, carefully curated to bring life and freshness
						to your home or workspace. Whether you're a beginner or a plant enthusiast, Planto is
						here to help you grow.
					</p>
				</div>

				<div className='flex w-full flex-col sm:h-[132px] sm:w-1/5'>
					<div className='mb-4 mt-10 flex items-center flex-gap-x-2 sm:mb-6'>
						<p className='text-sm font-bold text-white'>Quick Link's</p>
					</div>
					<div className='flex flex-col justify-between flex-gap-y-2'>
						<p className='text-xs font-normal text-white'>Home</p>
						<p className='text-xs font-normal text-white'>Type's Of plant's</p>
						<p className='text-xs font-normal text-white'>Contact</p>
						<p className='text-xs font-normal text-white'>Privacy</p>
					</div>
				</div>

				<div className='flex w-full flex-col justify-between sm:h-[132px] sm:w-1/3'>
					<div className='mb-4 mt-10 flex flex-col justify-center flex-gap-x-2 sm:mb-6'>
						<p className='text-sm font-bold text-white'>For Every Update.</p>
					</div>
					<p className='text-sm font-bold text-white'>Enter your email</p>
					<p className='text-xs font-normal text-white'>planto © all right reserve</p>
				</div>
			</div>
		</div>
	);
};
