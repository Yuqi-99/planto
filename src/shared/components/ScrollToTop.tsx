import { useEffect, useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

export const ScrollToTop = () => {
	const [showBtn, setShowBtn] = useState<boolean>(false);
	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {
				if (window.scrollY > window.innerHeight * 0.5) {
					setShowBtn(true);
				} else {
					setShowBtn(false);
				}
			});
		};
	});
	return (
		<div className='mx-auto flex max-w-[1440px] items-center justify-center pr-2'>
			{showBtn && (
				<div
					className='fixed bottom-8 right-4 z-10 flex size-20 cursor-pointer items-center justify-center rounded-full bg-green-400 text-3xl text-white opacity-50 hover:opacity-100'
					onClickCapture={() => {
						goToTop();
					}}
				>
					<FaArrowUpLong id='scroll-to-top-button' className='size-10' />
				</div>
			)}
		</div>
	);
};
