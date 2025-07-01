import { AnimatedContent } from '../../shared/components/AnimatedContent';
import { POLICIES_DATA } from '../../shared/constants/policiesData';
import { SectionTitle } from '../home/components/SectionTitle';

type TPoliciesCard = {
	title: string;
	desc: string;
};

const PoliciesCard = ({ title, desc }: TPoliciesCard) => {
	return (
		<div className='my-4 flex w-full flex-col items-start justify-center rounded-lg border-2 border-solid border-green-300 bg-green-400/60 p-8 text-start text-white backdrop-blur-md md:w-4/5'>
			<p className='text-lg font-bold md:text-xl'>{title}</p>
			<p className='mt-4 text-sm font-light md:text-base'>{desc}</p>
		</div>
	);
};

export const Policies = () => {
	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center px-6'>
				<SectionTitle title='Policies' />

				<div className='flex flex-col items-center justify-center'>
					<img
						src='/policies/policies-3.png'
						alt='background-image'
						className='my-4 flex md:w-1/2'
					/>

					{POLICIES_DATA?.slice(0, 5)?.map((card: TPoliciesCard) => {
						return (
							<AnimatedContent className='flex w-full items-center justify-center'>
								<PoliciesCard title={card.title} desc={card.desc} />
							</AnimatedContent>
						);
					})}

					<img
						src='/policies/policies-1.png'
						alt='background-image'
						className='my-4 flex md:w-1/2'
					/>

					{POLICIES_DATA?.slice(5)?.map((card: TPoliciesCard) => {
						return (
							<AnimatedContent className='flex w-full items-center justify-center'>
								<PoliciesCard title={card.title} desc={card.desc} />
							</AnimatedContent>
						);
					})}
				</div>
			</div>
		</div>
	);
};
