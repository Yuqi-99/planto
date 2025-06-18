import PlantoLogo from '../assets/planto-logo.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import CartIcon from '../assets/cart-icon.svg?react';
import MenuIcon from '../assets/menu-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useEffect, useRef, useState } from 'react';
import { Drawer } from '../components/Drawer';
import { cn } from '../utils/cn';
import { ShopSelection } from './components/ShopSelection';

export const Header = () => {
	const navigate = useNavigate();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const shopButtonRef = useRef<HTMLDivElement>(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openSelection, setOpenSelection] = useState(false);
	const [openDrawerSelection, setOpenDrawerSelection] = useState(false);
	const navCss =
		'relative inline-block py-2 text-base md:text-sm font-extralight text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full cursor-pointer';

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				(openSelection || openDrawerSelection) &&
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				shopButtonRef.current &&
				!shopButtonRef.current.contains(event.target as Node)
			) {
				setOpenSelection(false);
				setOpenDrawerSelection(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openSelection, openDrawerSelection]);

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
						<p className={navCss} onClick={() => navigate(ROUTES.home.path)}>
							Home
						</p>
						<p
							ref={shopButtonRef}
							className={cn(navCss, openSelection && 'after:w-full')}
							onClick={() => {
								setOpenSelection(!openSelection);
							}}
						>
							Shop
						</p>
						<p className={navCss}>More</p>
						<p className={navCss}>Contact Us</p>
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
					<p className={navCss} onClick={() => navigate(ROUTES.home.path)}>
						Home
					</p>
					<p
						ref={shopButtonRef}
						className={navCss}
						onClick={() => setOpenDrawerSelection(!openDrawerSelection)}
					>
						Shop
					</p>
					{openDrawerSelection && (
						<ShopSelection
							dropdownRef={dropdownRef}
							setOpenSelection={setOpenDrawerSelection}
							onClick={() => setOpenDrawer(false)}
						/>
					)}
					<p className={navCss}>More</p>
					<p className={navCss}>Contact Us</p>
				</div>
			</Drawer>

			{openSelection && (
				<ShopSelection dropdownRef={dropdownRef} setOpenSelection={setOpenSelection} />
			)}
		</>
	);
};
