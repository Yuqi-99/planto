import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from '../components/ScrollToTop';

export const RootLayout = () => {
	return (
		<main className='flex items-center justify-center'>
			<div id='content-wrapper' className='relative h-screen w-screen'>
				<Header />
				<Outlet />
				<ScrollToTop />
				<Footer />
			</div>
		</main>
	);
};
