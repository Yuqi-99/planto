export type TCard = {
	category: string;
	id: number;
	img: string;
	name: string;
};

export const Card = ({ category, id, img, name }: TCard) => {
	console.log(id, 'id');
	return (
		<div className='h-[300px] w-[240px] rounded-[36px] border-2 border-solid border-green-300 p-6 backdrop-blur-2xl lg:h-[380px] lg:w-[320px]'>
			<div className='flex h-full flex-col'>
				<img src={img} alt={name} className='-mt-20 lg:-mt-24' />
				<div className='mt-6 flex flex-col px-6'>
					<p className='text-sm font-extralight text-grey-300'>{category}</p>
					<p className='mt-3 text-2xl font-light text-grey-300'>{name}</p>
					<button
						type='button'
						className='mt-3 w-1/2 rounded-lg border border-solid border-grey-300 px-2 py-2 hover:bg-grey-600 hover:text-white'
					>
						<p className='text-sm font-light text-grey-300'>Buy Now</p>
					</button>
				</div>
			</div>
		</div>
	);
};
