import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';
import { FaArrowRightLong } from 'react-icons/fa6';
import NotFoundImg from '../../shared/assets/not-found.svg?react';

export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<NotFoundImg />
			<div className='mt-12 space-y-2 text-center text-white'>
				<p className='text-darkGrey-normal text-base/[normal] font-bold'>Page not found</p>
				<p className='text-grey-dark text-base/[22px] font-normal'>
					Cannot found the page you are looking for
				</p>
			</div>
			<button
				type='button'
				className='mt-10 flex w-fit items-center rounded-lg border border-solid border-white px-4 py-2 text-white hover:border-green-300 hover:bg-grey-300 hover:text-grey-600'
				onClick={() => navigate(ROUTES.home.path)}
			>
				Back to home <FaArrowRightLong className='ml-2' />
			</button>
		</div>
	);
};
