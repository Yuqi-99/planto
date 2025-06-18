import { useNavigate } from 'react-router-dom';
import PlayIcon from '../../../shared/assets/play-icon.svg?react';
import { ROUTES } from '../../../shared/constants/routes';

export const HomeTextSection = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full px-6 pt-8 md:w-3/5'>
			<p className='text-6xl font-semibold text-grey-300'>Breath Natural</p>
			<p className='pt-1 text-sm text-grey-300'>
				Discover your perfect green companion! Like Home Depot and Lowe's, we offer carefully
				selected indoor plants, but with personalized care guidance. Our plants don't just beautify
				your space - they create a living, breathing sanctuary that purifies your air and lifts your
				spirits, rivaling collections you'd find at Walmart or Target. Join thousands of plant
				lovers who've transformed their homes into natural havens.
			</p>
			<div className='mt-4 flex flex-gap-x-4'>
				<button
					type='button'
					className='rounded-lg border border-solid border-grey-300 px-8 py-2 hover:bg-grey-600 hover:text-white'
				>
					<p className='text-sm font-bold text-grey-300 sm:font-light'>Explore</p>
				</button>

				<button
					type='button'
					className='flex items-center'
					onClick={() => {
						navigate(ROUTES.iframe.path);
					}}
				>
					<div className='flex items-center justify-center rounded-full border border-solid border-grey-300 p-3'>
						<PlayIcon className='size-4 text-white' />
					</div>
					<p className='ml-2 text-sm font-bold text-grey-300 sm:font-light'>Live Demo...</p>
				</button>
			</div>
		</div>
	);
};
