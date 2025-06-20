import React from 'react';

type TDropdownSelection = {
	dropdownRef: React.RefObject<HTMLDivElement | null>;
	// setOpenSelection: (openSelection: boolean) => void;
	// onClick?: () => void;
	children?: React.ReactNode;
};

export const DropdownSelection = ({
	dropdownRef,
	// setOpenSelection,
	// onClick,
	children,
}: TDropdownSelection) => {
	return (
		<div
			className='z-menuSelection w-full rounded-lg border border-solid border-green-400 bg-grey-600 p-2 text-center md:absolute md:w-1/2 md:translate-x-1/2 md:text-left'
			ref={dropdownRef}
		>
			{children}
			{/* <p
				className='cursor-pointer rounded-lg p-2 text-sm font-light text-white hover:bg-grey-300 hover:text-darkGrey-darker'
				onClick={() => {
					navigate(ROUTES.allPlants.path);
					setOpenSelection(false);
					onClick?.();
				}}
			>
				All Plants
			</p>
			<p
				className='cursor-pointer rounded-lg p-2 text-sm font-light text-white hover:bg-grey-300 hover:text-darkGrey-darker'
				onClick={() => {
					navigate(ROUTES.potsAccessories.path);
					setOpenSelection(false);
					onClick?.();
				}}
			>
				Pots and Accessories
			</p> */}
		</div>
	);
};
