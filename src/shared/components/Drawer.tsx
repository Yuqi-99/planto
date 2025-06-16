import { cn } from '../utils/cn';
import PlantoLogo from '../assets/planto-logo.svg?react';
import { IoMdClose } from 'react-icons/io';

type TDrawer = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	children?: React.ReactNode;
};

export const Drawer = ({ isOpen, setIsOpen, children }: TDrawer) => {
	return (
		<>
			{/* Overlay (optional for background dim) */}
			{isOpen && (
				<div
					className='fixed inset-0 z-30 bg-black bg-opacity-30'
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Drawer */}
			<div
				className={cn(
					'fixed right-0 top-0 z-40 h-screen w-64 transform overflow-y-auto bg-mainBgColor p-4 transition-transform',
					isOpen ? 'translate-x-0' : 'translate-x-full'
				)}
				aria-labelledby='drawer-right-label'
				role='dialog'
				tabIndex={-1}
			>
				<p id='drawer-right-label' className='mb-8 inline-flex items-center'>
					<div className='flex items-end flex-gap-x-2'>
						<PlantoLogo className='size-8' />
						<p className='text-lg font-bold text-white'>Planto.</p>
					</div>
					<IoMdClose
						className='absolute right-2.5 top-5 size-6 cursor-pointer text-white'
						onClick={() => setIsOpen(false)}
					/>
				</p>

				{/* Content */}
				{children}
			</div>
		</>
	);
};
