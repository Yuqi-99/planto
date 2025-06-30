import { useNavigate } from 'react-router-dom';
import PlantoLogo from '../assets/planto-logo.svg?react';
import { ROUTES } from '../constants/routes';
import { CONTACT_US_DROPDOWN, SHOP_DROPDOWN } from '../constants/dropdownData';
import { cn } from '../utils/cn';

export const Footer = () => {
	const navigate = useNavigate();
	const NAVIGATION_PATH = [
		{ id: 1, title: 'Home', navigate: ROUTES.home.path },
		SHOP_DROPDOWN,
		CONTACT_US_DROPDOWN,
	];

	return (
		<div className='flex min-h-56 w-full justify-center bg-footerBgColor p-8 pb-12'>
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

				<div className='flex w-full flex-col sm:min-h-[132px] sm:w-1/4'>
					<div className='mb-4 mt-10 flex items-center flex-gap-x-2 sm:mb-6'>
						<p className='text-sm font-bold text-white'>Quick Link's</p>
					</div>
					<div className='flex flex-wrap items-center flex-gap-y-2 sm:flex-col sm:items-start sm:justify-between'>
						{NAVIGATION_PATH?.flat().map((item, index) => {
							const length = NAVIGATION_PATH?.flat()?.length;
							return (
								<>
									<p
										key={`${index}-${item.id}`}
										className='text-xs font-normal text-white'
										onClick={() => navigate(item.navigate)}
									>
										{item.title}
									</p>
									<p
										className={cn(
											'inline-block px-2 text-white sm:hidden',
											length === index + 1 && 'hidden'
										)}
									>
										|
									</p>
								</>
							);
						})}
					</div>
				</div>

				<div className='flex h-full w-full flex-col justify-between sm:min-h-[132px] sm:w-1/3'>
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
