import PlantoLogo from '../assets/planto-logo.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import CartIcon from '../assets/cart-icon.svg?react';
import MenuIcon from '../assets/menu-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useEffect, useRef, useState } from 'react';
import { Drawer } from '../components/Drawer';
import { cn } from '../utils/cn';

type TShopSelection = {
	dropdownRef: React.RefObject<HTMLDivElement | null>;
	setOpenSelection: (openSelection: boolean) => void;
};

const ShopSelection = ({ dropdownRef, setOpenSelection }: TShopSelection) => {
	const navigate = useNavigate();
	return (
		<div
			className='z-menuSelection w-full rounded-lg border border-solid border-green-400 bg-grey-600 p-2 text-center md:absolute md:w-1/2 md:translate-x-1/2 md:text-left'
			ref={dropdownRef}
		>
			<p
				className='hover:text-darkGrey-darker cursor-pointer rounded-lg p-2 text-sm font-light text-white hover:bg-grey-300'
				onClick={() => {
					navigate(ROUTES.allPlants.path);
					setOpenSelection(false);
				}}
			>
				All Plants
			</p>
			<p
				className='hover:text-darkGrey-darker cursor-pointer rounded-lg p-2 text-sm font-light text-white hover:bg-grey-300'
				onClick={() => {
					navigate(ROUTES.potsAccessories.path);
					setOpenSelection(false);
				}}
			>
				Pots and Accessories
			</p>
		</div>
	);
};

export const Header = () => {
	const navigate = useNavigate();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openSelection, setOpenSelection] = useState(false);
	const [openDrawerSelection, setOpenDrawerSelection] = useState(false);
	const navCss =
		'relative inline-block py-2 text-base md:text-sm font-extralight text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full cursor-pointer';

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				openSelection &&
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpenSelection(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openSelection]);

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
							className={cn(navCss, openSelection && 'after:w-full')}
							onClick={() => setOpenSelection(!openSelection)}
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
					<p className={navCss} onClick={() => setOpenDrawerSelection(!openDrawerSelection)}>
						Shop
					</p>
					{openDrawerSelection && (
						<ShopSelection dropdownRef={dropdownRef} setOpenSelection={setOpenDrawerSelection} />
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
