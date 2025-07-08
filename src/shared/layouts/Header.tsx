import { useRef, useState } from 'react';
import { IoIosCart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg?react';
import MenuIcon from '../assets/menu-icon.svg?react';
import PlantoLogo from '../assets/planto-logo.svg?react';
import SearchIcon from '../assets/search-icon.svg?react';
import { Drawer } from '../components/Drawer';
import { CONTACT_US_DROPDOWN, SHOP_DROPDOWN } from '../constants/dropdownData';
import { ROUTES } from '../constants/routes';
import { useClickOutside } from '../hook/useClickOutside';
import { useCartStore, type TcartItem } from '../stores/useCartStore';
import { cn } from '../utils/cn';
import { CartItem } from './components/CartItem';
import { DropdownItem } from './components/DropdownItem';
import { DropdownSelection } from './components/DropdownSelection';
import { Modal } from '../components/Modal';
import { GlareHover } from '../components/GlareHover';

export const Header = () => {
	const navigate = useNavigate();
	const { cart, removeFromCart, setShowToast, setToastContent } = useCartStore();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const shopButtonRef = useRef<HTMLDivElement>(null);
	const contactDropdownRef = useRef<HTMLDivElement>(null);
	const contactButtonRef = useRef<HTMLDivElement>(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	const [removeCartModal, setRemoveCartModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState<TcartItem>();
	const [activeDropdown, setActiveDropdown] = useState<null | 'shop' | 'contact'>(null);
	const cartQuantity = cart?.map((item) => item.quantity).reduce((a, b) => a + b, 0);
	const cartPrice = cart?.map((item) => item.price).reduce((a, b) => a + b, 0);

	const navCss =
		'relative inline-block py-2 md:py-4 text-base md:text-sm font-extralight text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-200 after:transition-all after:duration-300 hover:after:w-full cursor-pointer md:relative md:h-full';
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
			<div className='sticky top-0 z-menuSelection flex w-full items-center justify-center bg-headerBgColor px-8 py-4 md:py-0'>
				<div className='flex h-full w-full max-w-[1440px] items-center justify-between'>
					<div
						className='flex cursor-pointer items-center flex-gap-x-2'
						onClick={() => navigate(ROUTES.home.path)}
					>
						<PlantoLogo className='size-8' />
						<p className='text-lg font-bold text-white'>Planto.</p>
					</div>

					<div className='hidden h-full items-center flex-gap-x-8 md:flex md:py-2'>
						<p className={navCss} onClick={() => navigate(ROUTES.home.path)}>
							Home
						</p>
						<div
							className='relative cursor-pointer'
							onMouseEnter={() => setActiveDropdown('shop')}
							onMouseLeave={() => setActiveDropdown(null)}
						>
							<p
								ref={shopButtonRef}
								className={cn(navCss, activeDropdown === 'shop' && 'after:w-full')}
							>
								Shop
							</p>
							{/* Dopdown for desktop size */}
							{activeDropdown === 'shop' && !openDrawer && (
								<DropdownSelection dropdownRef={contactDropdownRef}>
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
						</div>
						<p className={navCss}>More</p>
						<div
							className='relative cursor-pointer'
							onMouseEnter={() => setActiveDropdown('contact')}
							onMouseLeave={() => setActiveDropdown(null)}
						>
							<p
								ref={contactButtonRef}
								className={cn(navCss, activeDropdown === 'contact' && 'after:w-full')}
							>
								Contact Us
							</p>
							{/* Dopdown for desktop size */}
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
						</div>
					</div>

					<div className='flex items-center flex-gap-x-10'>
						<SearchIcon className='size-6 cursor-pointer' />
						<div className='relative bg-transparent' onClickCapture={() => setOpenCart(true)}>
							<CartIcon className='size-6 cursor-pointer' />
							{cartQuantity > 0 && (
								<div
									className={cn(
										'absolute right-[-10px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full border border-solid border-grey-300 bg-green-300',
										cartQuantity > 99 && 'h-6 w-6'
									)}
								>
									<p className='text-[10px] font-medium text-white'>
										{cartQuantity > 99 ? '99+' : cartQuantity}
									</p>
								</div>
							)}
						</div>
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

			{/* cart drawer */}
			<Drawer isOpen={openCart} setIsOpen={setOpenCart} className='w-80 border-l border-green-300'>
				<div className='flex flex-col items-center'>
					<p className='text-bold mb-10 w-full text-left text-xl text-grey-300'>Shopping Cart</p>
					{cart?.length === 0 && (
						<div className='flex flex-col items-center'>
							<IoIosCart className='mb-2 size-10 text-grey-300' />
							<p className='text-bold text-grey-300'>No item found</p>
						</div>
					)}
					{cart?.length > 0 &&
						cart?.map((item) => {
							return (
								<CartItem
									key={item.name}
									item={item}
									setRemoveCartModal={setRemoveCartModal}
									setSelectedItem={setSelectedItem}
								/>
							);
						})}
					<button
						type='button'
						className='mb-8 mt-4 w-full rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
						onClick={() => {
							console.log('checkout');
						}}
					>
						<GlareHover
							glareColor='#ffffff'
							glareOpacity={0.3}
							glareAngle={-30}
							transitionDuration={800}
							playOnce={false}
							background='transparent'
							width='100%'
							height='100%'
							className='px-2 py-2'
						>
							<p className='text-sm font-light'>Checkout: RM {cartPrice}</p>
						</GlareHover>
					</button>
				</div>
			</Drawer>

			{removeCartModal && (
				<Modal
					title='Remove Item'
					msg='Are you sure you want to remove this item from your cart?'
					buttonTitle='Close'
					confirmButtonTitle='Remove'
					onClose={() => {
						setRemoveCartModal(false);
					}}
					onConfirm={() => {
						if (selectedItem?.name) {
							removeFromCart(selectedItem.name);
						}
						setShowToast(true);
						setToastContent({ message: 'Item remove successfully to cart', add: false });
						setRemoveCartModal(false);
					}}
				/>
			)}
		</>
	);
};
