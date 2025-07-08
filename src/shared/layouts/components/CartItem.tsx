import { useEffect } from 'react';
import { CartQuatityButton } from '../../../modules/home/components/CartQuatityButton';
import { useCartItem } from '../../hook/useCartItem';
import { type TcartItem } from '../../stores/useCartStore';
import { formatAmount } from '../../utils/formatAmount';

type TCartItemProps = {
	item: TcartItem;
	setRemoveCartModal: (value: boolean) => void;
	setSelectedItem: (value: TcartItem) => void;
};
export const CartItem = ({ item, setRemoveCartModal, setSelectedItem }: TCartItemProps) => {
	// const [removeCartModal, setRemoveCartModal] = useState(false);
	const { click, setClick, quantity, setQuantity, cartRef } = useCartItem({
		name: item?.name,
		price: item?.price,
		img: item?.img,
		from: 'cartDrawer',
	});

	useEffect(() => {
		if (click && quantity === 0) {
			setRemoveCartModal(true);
		}
	}, [quantity, click]);

	return (
		<>
			<div className='mb-2 flex h-full w-full flex-row items-center justify-between rounded-lg bg-green-600 p-2 text-grey-300'>
				<div className='flex'>
					<img src={item.img} alt={item.name} className='size-12 rounded-full' />
					<div className='ml-3 flex flex-col'>
						<p className='text-medium'>{item.name}</p>
						<p className='text-light text-xs'>Quantity: {item.quantity}</p>
						<p className='text-bold'>RM {formatAmount(item.total)}</p>
					</div>
				</div>
				<CartQuatityButton
					className='ml-3 mt-3 flex w-fit cursor-pointer items-center justify-between rounded-lg border border-solid border-grey-300 px-2 py-2 text-white'
					cartRef={cartRef}
					quantity={quantity}
					onBlur={() => {
						setClick(false);
					}}
					onAddClick={() => {
						setClick(true);
						setQuantity(quantity + 1);
						setSelectedItem(item);
					}}
					onMinusClick={() => {
						if (quantity === 1) {
							// 先不减，弹 modal
							setRemoveCartModal(true);
						} else {
							// 数量大于1，直接减
							setQuantity(quantity - 1);
						}
						setSelectedItem(item);
					}}
				/>
			</div>
		</>
	);
};
