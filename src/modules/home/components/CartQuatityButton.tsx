type TCartQuantityButton = {
	className?: string;
	cartRef: React.RefObject<HTMLDivElement | null>;
	quantity: number;
	onBlur: () => void;
	onAddClick: () => void;
	onMinusClick: () => void;
};
export const CartQuatityButton = ({
	className,
	cartRef,
	quantity,
	onBlur,
	onAddClick,
	onMinusClick,
}: TCartQuantityButton) => {
	return (
		<div
			ref={cartRef}
			className={className}
			onBlur={() => {
				onBlur();
			}}
		>
			<div
				className='flex h-4 w-4 items-center justify-center'
				id='cartButtonMinus'
				onClickCapture={() => {
					// if (quantity > 0) {
					// 	setQuantity(quantity - 1);
					// }
					onMinusClick();
				}}
			>
				<span className='-mt-0.5 text-sm font-medium'>-</span>
			</div>
			<p className='mx-3 text-sm font-medium'>{quantity}</p>
			<div
				className='flex h-4 w-4 items-center justify-center'
				id='cartButtonPlus'
				onClickCapture={() => {
					onAddClick();
				}}
			>
				<p className='-mt-0.5 text-sm font-medium'>+</p>
			</div>
		</div>
	);
};
