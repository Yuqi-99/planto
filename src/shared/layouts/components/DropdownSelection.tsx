import React from 'react';

type TDropdownSelection = {
	dropdownRef: React.RefObject<HTMLDivElement | null>;
	children?: React.ReactNode;
};

export const DropdownSelection = ({ dropdownRef, children }: TDropdownSelection) => {
	return (
		<div
			// className='z-modal w-full rounded-lg border border-solid border-green-400 bg-grey-600 p-2 text-center md:absolute md:w-1/2 md:translate-x-1/2 md:text-left'
			className='z-menuSelection w-full rounded-lg border border-solid border-green-400 bg-grey-600 p-2 text-center md:absolute md:left-0 md:min-w-[320px] md:-translate-x-1/3 md:text-left'
			ref={dropdownRef}
		>
			{children}
		</div>
	);
};
