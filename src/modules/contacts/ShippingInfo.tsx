import { SHIPPING_DATA } from '../../shared/constants/shippingData';
import { cn } from '../../shared/utils/cn';
import { SectionTitle } from '../home/components/SectionTitle';

type TShippingCard = {
	id: number;
	image: string;
	title: string;
	desc: string;
	left?: boolean;
};

const ShippingCard = ({ image, title, desc, left = true }: TShippingCard) => {
	return (
		<div
			className={cn(
				'my-8 flex md:h-[300px] w-full items-start justify-center rounded-lg border-2 border-solid border-green-300 bg-green-400/60 text-start text-white backdrop-blur-md',
				!left && 'flex-row-reverse'
			)}
		>
			<img
				src={image}
				alt='background-image'
				className={cn(
					'hidden h-full max-h-[300px] w-1/2 md:flex',
					left ? 'rounded-l-lg' : 'rounded-r-lg'
				)}
			/>
			<div className='max-w-1/2 flex h-full flex-col justify-center p-8'>
				<p className='text-base font-bold md:text-xl'>{title}</p>
				<p className='mt-4 text-sm font-light md:text-base'>{desc}</p>
			</div>
		</div>
	);
};

export const ShippingInfo = () => {
	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center'>
				<SectionTitle title='Shipping Info' />

				<div className='flex flex-col items-center justify-center'>
					<div className='w-full bg-green-600 px-6 py-8 text-center'>
						<p className='text-lg font-bold text-white'>🚚 Shipping Information – Planto</p>
						<p className='mt-4 text-sm text-white'>
							At Planto, we’re committed to delivering healthy, happy plants to every corner of
							Malaysia. Here’s everything you need to know about how we ship your leafy companions.
						</p>
					</div>

					<div className='px-8'>
						{SHIPPING_DATA?.map((card: TShippingCard) => {
							return (
								<ShippingCard
									key={card.id}
									id={card.id}
									image={card.image}
									title={card.title}
									desc={card.desc}
									left={card?.left}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
