import { Outlet } from 'react-router-dom';

export const ContentLayout = () => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='relative flex w-full max-w-[1440px] flex-col'>
				<Outlet />
			</div>
		</div>
	);
};
