type TDropdownItem = {
	title: string;
	onClick?: () => void;
};
export const DropdownItem = ({ title, onClick }: TDropdownItem) => {
	return (
		<p
			className='cursor-pointer rounded-lg p-2 text-sm font-light text-white hover:bg-grey-300 hover:text-darkGrey-darker'
			onClick={() => {
				onClick?.();
			}}
		>
			{title}
		</p>
	);
};
