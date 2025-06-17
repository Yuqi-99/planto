import { PLANT_DATA } from '../../../shared/constants/plantData';
import { Card, type TCard } from './Card';

export const CardSwiper = () => {
	return (
		// <div className='hidden md:absolute md:right-8 md:top-16 md:mt-0'>
		<div className='absolute right-8 top-16 hidden md:flex'>
			<div>
				{PLANT_DATA?.slice(0, 1)?.map((card: TCard) => {
					return (
						<Card
							key={card.id}
							id={card.id}
							category={card.category}
							img={card.img}
							name={card.name}
							showBgColor={false}
						/>
					);
				})}
			</div>
		</div>
	);
};
