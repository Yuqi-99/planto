import { PLANT_DATA } from '../../../shared/constants/plantData';
import { Card, type TCard } from './Card';

export const CardSwiper = () => {
	return (
		<div className='absolute right-8 top-16'>
			<div>
				{PLANT_DATA?.slice(0, 1)?.map((card: TCard) => {
					return (
						<Card
							key={card.id}
							id={card.id}
							category={card.category}
							img={card.img}
							name={card.name}
						/>
					);
				})}
			</div>
		</div>
	);
};
