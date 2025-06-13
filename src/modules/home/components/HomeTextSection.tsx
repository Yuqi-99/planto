import PlayIcon from '../../../shared/assets/play-icon.svg?react';

export const HomeTextSection = () => {
	return (
		<div className='w-3/5 px-6 pt-8'>
			<p className='text-grey-300 text-6xl font-semibold'>Breath Natural</p>
			<p className='text-grey-300 pt-1 text-sm'>
				Discover your perfect green companion! Like Home Depot and Lowe's, we offer carefully
				selected indoor plants, but with personalized care guidance. Our plants don't just beautify
				your space - they create a living, breathing sanctuary that purifies your air and lifts your
				spirits, rivaling collections you'd find at Walmart or Target. Join thousands of plant
				lovers who've transformed their homes into natural havens.
			</p>
			<div className='flex-gap-x-4 mt-4 flex'>
				<button
					type='button'
					className='border-grey-300 hover:bg-grey-600 rounded-lg border border-solid px-8 py-2 hover:text-white'
				>
					<p className='text-grey-300 text-sm font-light'>Explore</p>
				</button>

				<button type='button' className='flex items-center'>
					<div className='border-grey-300 flex items-center justify-center rounded-full border border-solid p-3'>
						<PlayIcon className='size-4' />
					</div>
					<p className='text-grey-300 ml-2 text-sm font-light'>Live Demo...</p>
				</button>
			</div>
		</div>
	);
};
