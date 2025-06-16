import PlantoLogo from '../assets/planto-logo.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import CartIcon from '../assets/cart-icon.svg?react';
import MenuIcon from '../assets/menu-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useState } from 'react';
import { Drawer } from '../components/Drawer';

export const Header = () => {
	const navigate = useNavigate();
	const [openDrawer, setOpenDrawer] = useState(false);
	const navCss =
		'relative inline-block py-2 text-base md:text-sm font-extralight text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full cursor-pointer';

	return (
		<>
			<div className='flex w-full items-center justify-center bg-headerBgColor px-8 py-6'>
				<div className='flex w-full max-w-[1440px] items-center justify-between'>
					<div
						className='flex cursor-pointer items-center flex-gap-x-2'
						onClick={() => navigate(ROUTES.home.path)}
					>
						<PlantoLogo className='size-8' />
						<p className='text-lg font-bold text-white'>Planto.</p>
					</div>

					<div className='hidden h-10 items-center flex-gap-x-8 md:flex'>
						<p className={navCss}>Home</p>
						<p className={navCss}>Plants Type</p>
						<p className={navCss}>More</p>
						<p className={navCss}>Contact</p>
					</div>

					<div className='flex items-center flex-gap-x-10'>
						<SearchIcon className='size-6 cursor-pointer' />
						<CartIcon className='size-6 cursor-pointer' />
						<MenuIcon
							className='flex size-6 cursor-pointer md:hidden'
							onClickCapture={() => setOpenDrawer(true)}
						/>
					</div>
				</div>
			</div>

			<Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer}>
				<div className='flex flex-col items-center flex-gap-y-8 md:hidden'>
					<p className={navCss}>Home</p>
					<p className={navCss}>Plants Type</p>
					<p className={navCss}>More</p>
					<p className={navCss}>Contact</p>
				</div>
			</Drawer>
		</>
	);
};
