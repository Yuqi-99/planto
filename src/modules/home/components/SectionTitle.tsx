type TSectionTitleProps = {
	title: string;
};

export const SectionTitle = ({ title }: TSectionTitleProps) => {
	return (
		<div className='relative my-8 inline-block px-6 py-3 text-xl font-semibold text-white'>
			{title}
			{/* 左上角 */}
			<span className='absolute left-0 top-0 h-0.5 w-6 rounded-lg bg-gradient-to-r from-green-400 to-green-200'></span>
			<span className='absolute left-0 top-0 h-6 w-0.5 rounded-lg bg-gradient-to-b from-green-400 to-green-200'></span>
			{/* 右下角 */}
			<span className='absolute bottom-0 right-0 h-0.5 w-6 rounded-lg bg-gradient-to-l from-green-400 to-green-200'></span>
			<span className='absolute bottom-0 right-0 h-6 w-0.5 rounded-lg bg-gradient-to-t from-green-400 to-green-200'></span>
		</div>
	);
};
