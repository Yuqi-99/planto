import { Breadcrumb } from '../../shared/components/Breadcrumb';
import { POTS_ACCESSORIES_DATA } from '../../shared/constants/productsData';
import { Card, type TCard } from '../home/components/Card';

export const PotsAndAccessories = () => {
	return (
		<>
			<div className='mt-10 px-6'>
				<Breadcrumb subpath='Pots & Accessories' />
			</div>
			<div className='my-20'>
				<div className='flex flex-wrap items-center justify-center gap-6 flex-gap-y-16'>
					{POTS_ACCESSORIES_DATA?.map((card: TCard) => {
						return (
							<Card
								key={card.id}
								id={card.id}
								category={card.category}
								img={card.img}
								name={card.name}
								price={card.price}
								showPrice
								imgClassName={'h-[200px] w-[150px] lg:h-[240px] lg:w-[200px]'}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};
