import { cn } from '../utils/cn';
import { RiLeafLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useCartStore } from '../stores/useCartStore';

export const Toast = () => {
	const { showToast, toastContent, setShowToast, setToastContent } = useCartStore();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (showToast) {
			setVisible(true);
			const timer = setTimeout(() => {
				setVisible(false);
				setShowToast(false);
				setToastContent({ message: '', add: true });
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, [showToast]);

	return (
		<div
			id='toast-success'
			className={cn(
				'fixed bottom-8 right-4 z-modal-content mb-4 flex w-full max-w-xs items-center rounded-lg border border-solid border-green-300 bg-green-700 p-2 text-grey-300 shadow-sm transition-all duration-500 ease-in-out',
				visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
			)}
			role='alert'
		>
			<div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg'>
				<RiLeafLine className='size-5' />
				<span className='sr-only'>Check icon</span>
			</div>
			<div
				className={cn(
					'ms-3 text-sm font-normal',
					toastContent.add ? 'text-green-100' : 'text-yellow-200'
				)}
			>
				{toastContent.message}
			</div>
		</div>
	);
};
