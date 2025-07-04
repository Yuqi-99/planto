import { PRODUCTS_PLANT_DATA } from '../../../shared/constants/productsData';
import { Card, type TCard } from './Card';
import { SectionTitle } from './SectionTitle';

export const TopSelling = () => {
	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<SectionTitle title='Our Top Selling' />

			<div className='mt-20 grid gap-x-4 gap-y-20 sm:grid-cols-2 md:grid-cols-3'>
				{PRODUCTS_PLANT_DATA?.slice(0, 6)?.map((card: TCard) => {
					return (
						<Card
							showPrice
							key={card.id}
							id={card.id}
							category={card.category}
							img={card.img}
							name={card.name}
							price={card.price}
							imgClassName={'h-[230px] lg:h-[290px]'}
						/>
					);
				})}
			</div>
		</div>
	);
};
