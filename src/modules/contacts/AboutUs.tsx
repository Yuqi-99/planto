import { SectionTitle } from '../home/components/SectionTitle';

export const AboutUs = () => {
	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center px-6'>
				<SectionTitle title='About us' />

				<div className='flex flex-col items-center justify-center sm:flex-row sm:flex-gap-x-4'>
					<img
						src='/aboutUs/aboutus.png'
						alt='background-image'
						className='mb-10 hidden w-2/5 max-w-[300px] sm:flex'
					/>
					<img
						src='/aboutUs/aboutus-6.png'
						alt='background-image'
						className='mb-10 flex w-full sm:hidden'
					/>
					<div className='h-full text-sm font-light text-white flex-gap-y-6 sm:w-1/2 md:text-base'>
						<p>
							At Planto, we believe that every home deserves a touch of nature. Founded with a
							passion for greenery and a love for mindful living, Planto is your trusted destination
							for beautiful, healthy, and thoughtfully curated plants.
						</p>
						<p>
							Whether you're a seasoned plant parent or just getting started, our wide range of
							indoor and outdoor plants, along with stylish pots and accessories, is designed to
							bring life and calm into your space. Each plant is handpicked with care to ensure
							quality, sustainability, and ease of maintenance.
						</p>
						<p>
							We’re more than just a plant shop — we’re a growing community that celebrates the joy
							of living with plants. From beginner tips to personalized recommendations, our mission
							is to help you grow confidently and happily.
						</p>
						<p> Bring nature home, with Planto.</p>
					</div>
				</div>
			</div>

			{/* advantages section */}
			<div className='my-6 flex w-full flex-col items-center justify-around bg-green-600 px-4 py-10 sm:flex-row'>
				<div className='mb-4 flex flex-col items-center text-center sm:mb-0 sm:w-1/4'>
					<img src='/aboutUs/large-selection.png' alt='background-image' className='size-20' />
					<p className='text-lg text-white'>Large Selection</p>
					<p className='text-xs font-light text-white'>
						From easy-care classics to rare finds, we have a plant for everyone.
					</p>
				</div>
				<div className='mb-4 flex flex-col items-center text-center sm:mb-0 sm:w-1/4'>
					<img src='/aboutUs/free-shipping.png' alt='background-image' className='size-20' />
					<p className='text-lg text-white'>Free Shipping</p>
					<p className='text-xs font-light text-white'>
						We ship from our greenhouses, ensuring your plants arrive fresh and healthy.
					</p>
				</div>
				<div className='mb-4 flex flex-col items-center text-center sm:mb-0 sm:w-1/4'>
					<img src='/aboutUs/guarantee.png' alt='background-image' className='size-20' />
					<p className='text-lg text-white'>30-Day Guarantee</p>
					<p className='text-xs font-light text-white'>
						We stand by our plants! If anything goes wrong, we’ll make it right.
					</p>
				</div>
			</div>
		</div>
	);
};
