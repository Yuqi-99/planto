import { Outlet, useLocation } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import { Toast } from '../components/Toast';
import { Footer } from './Footer';
import { Header } from './Header';
import { useEffect } from 'react';

export const RootLayout = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, [pathname]);

	return (
		<main className='flex items-center justify-center'>
			<div id='content-wrapper' className='relative min-h-screen w-screen'>
				<Header />
				<Outlet />
				<ScrollToTop />
				<Toast />
				<Footer />
			</div>
		</main>
	);
};
