import { TOP_SELLING_DATA } from '../../../shared/constants/plantData';
import { Card, type TCard } from './Card';
import { SectionTitle } from './SectionTitle';

export const TopSelling = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<SectionTitle title='Our Top Selling' />

			<div className='mt-20 grid w-full grid-cols-3 gap-x-4 gap-y-20'>
				{TOP_SELLING_DATA?.map((card: TCard) => {
					return (
						<Card
							showPrice
							key={card.id}
							id={card.id}
							category={card.category}
							img={card.img}
							name={card.name}
							price={card.price}
							height={'h-[230px] lg:h-[290px]'}
						/>
					);
				})}
			</div>
		</div>
	);
};
