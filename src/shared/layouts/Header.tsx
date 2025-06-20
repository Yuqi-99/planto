import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg?react';
import MenuIcon from '../assets/menu-icon.svg?react';
import PlantoLogo from '../assets/planto-logo.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import { Drawer } from '../components/Drawer';
import { ROUTES } from '../constants/routes';
import { useClickOutside } from '../hook/useClickOutside';
import { cn } from '../utils/cn';
import { DropdownSelection } from './components/DropdownSelection';
import { DropdownItem } from './components/DropdownItem';
import { CONTACT_US_DROPDOWN, SHOP_DROPDOWN } from '../constants/dropdownData';
export const Header = () => {
	const navigate = useNavigate();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const shopButtonRef = useRef<HTMLDivElement>(null);
	const contactDropdownRef = useRef<HTMLDivElement>(null);
	const contactButtonRef = useRef<HTMLDivElement>(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<null | 'shop' | 'contact'>(null);

	const navCss =
		'relative inline-block py-2 text-base md:text-sm font-extralight text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all after:duration-300 hover:after:w-full cursor-pointer';
	const handleNavigate = (path: string) => {
		navigate(path);
		setOpenDrawer(false);
		setActiveDropdown(null);
	};
	useClickOutside([dropdownRef, shopButtonRef, contactDropdownRef, contactButtonRef], () => {
		setActiveDropdown(null);
	});

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
							className={cn(navCss, activeDropdown === 'shop' && 'after:w-full')}
							onClick={() => setActiveDropdown((prev) => (prev === 'shop' ? null : 'shop'))}
						>
							Shop
						</p>
						<p className={navCss}>More</p>
						<p
							ref={contactButtonRef}
							className={cn(navCss, activeDropdown === 'contact' && 'after:w-full')}
							onClick={() => setActiveDropdown((prev) => (prev === 'contact' ? null : 'contact'))}
						>
							Contact Us
						</p>
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

			{/* mobile sidebar menu */}
			<Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer}>
				<div className='flex flex-col items-center flex-gap-y-8 md:hidden'>
					<p className={navCss} onClick={() => navigate(ROUTES.home.path)}>
						Home
					</p>
					<p
						ref={shopButtonRef}
						className={cn(navCss, activeDropdown === 'shop' && 'after:w-full')}
						onClick={() => setActiveDropdown((prev) => (prev === 'shop' ? null : 'shop'))}
					>
						Shop
					</p>
					{activeDropdown === 'shop' && (
						<DropdownSelection dropdownRef={dropdownRef}>
							{SHOP_DROPDOWN.map((item) => (
								<DropdownItem
									key={item.id}
									title={item.title}
									onClick={() => {
										handleNavigate(item.navigate);
									}}
								/>
							))}
						</DropdownSelection>
					)}
					<p className={navCss}>More</p>
					<p
						ref={contactButtonRef}
						className={cn(navCss, activeDropdown === 'contact' && 'after:w-full')}
						onClick={() => setActiveDropdown((prev) => (prev === 'contact' ? null : 'contact'))}
					>
						Contact Us
					</p>
					{activeDropdown === 'contact' && (
						<DropdownSelection dropdownRef={contactDropdownRef}>
							{CONTACT_US_DROPDOWN.map((item) => (
								<DropdownItem
									key={item.id}
									title={item.title}
									onClick={() => {
										handleNavigate(item.navigate);
									}}
								/>
							))}
						</DropdownSelection>
					)}
				</div>
			</Drawer>

			{/* Dopdown for desktop size */}
			{activeDropdown === 'shop' && !openDrawer && (
				<DropdownSelection dropdownRef={dropdownRef}>
					{SHOP_DROPDOWN.map((item) => (
						<DropdownItem
							key={item.id}
							title={item.title}
							onClick={() => {
								handleNavigate(item.navigate);
							}}
						/>
					))}
				</DropdownSelection>
			)}
			{activeDropdown === 'contact' && !openDrawer && (
				<DropdownSelection dropdownRef={dropdownRef}>
					{CONTACT_US_DROPDOWN.map((item) => (
						<DropdownItem
							key={item.id}
							title={item.title}
							onClick={() => {
								handleNavigate(item.navigate);
							}}
						/>
					))}
				</DropdownSelection>
			)}
		</>
	);
};
