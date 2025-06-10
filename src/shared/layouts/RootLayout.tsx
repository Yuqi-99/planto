import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const RootLayout = () => {
	return (
		<main className='flex items-center justify-center'>
			<div id='content-wrapper' className='h-screen w-screen'>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</main>
	);
};
