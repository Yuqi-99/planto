import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import { Toast } from '../components/Toast';
import { Footer } from './Footer';
import { Header } from './Header';

export const RootLayout = () => {
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
