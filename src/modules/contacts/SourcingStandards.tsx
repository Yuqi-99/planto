import { SOURCING_DATA } from '../../shared/constants/sourcingData';
import { SectionTitle } from '../home/components/SectionTitle';

type TSourcingCard = {
	title: string;
	desc: string;
};

const SourcingCard = ({ title, desc }: TSourcingCard) => {
	return (
		<div className='border-grey-400 my-4 flex w-full flex-col items-start justify-center rounded-lg border-2 border-solid bg-green-400/60 p-8 text-start text-white backdrop-blur-md md:w-[49%]'>
			<p className='text-lg font-bold md:text-xl'>{title}</p>
			<p className='mt-4 text-sm font-light md:text-base'>{desc}</p>
		</div>
	);
};

export const SourcingStandards = () => {
	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center'>
				<SectionTitle title='🪴 Sourcing Standards' />
				<div className='flex flex-wrap justify-between px-8'>
					{SOURCING_DATA?.map((card: TSourcingCard) => {
						return <SourcingCard title={card.title} desc={card.desc} />;
					})}
				</div>
			</div>
		</div>
	);
};
