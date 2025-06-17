import { MdOutlineChevronRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

type TBreadcrumb = {
	subpath: string;
	thirdpath?: string;
};

export const Breadcrumb = ({ subpath, thirdpath }: TBreadcrumb) => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-row items-center flex-gap-x-3'>
			<p
				className='cursor-pointer text-sm font-light text-green-100'
				onClick={() => {
					navigate(ROUTES.home.path);
				}}
			>
				Home
			</p>
			<MdOutlineChevronRight className='text-white' />
			<p className='text-sm font-light text-white'>{subpath}</p>
			{thirdpath && (
				<>
					<MdOutlineChevronRight className='text-white' />
					<p className='text-sm font-light text-white'>{thirdpath}</p>
				</>
			)}
		</div>
	);
};
