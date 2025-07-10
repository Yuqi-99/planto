import { useLocation, useNavigate } from 'react-router-dom';
import { SectionTitle } from '../home/components/SectionTitle';
import { LuPackageCheck } from 'react-icons/lu';
import { formatAmount } from '../../shared/utils/formatAmount';
import { useCartStore } from '../../shared/stores/useCartStore';
import { FaRegUser } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ROUTES } from '../../shared/constants/routes';
import { STORAGE_KEYS } from '../../shared/constants/storageKeys';
import { getLocalStorage } from '../../shared/utils/getSetStorage';

export const PaymentProcessingPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const orderData = location.state;
	const { cart, resetCart } = useCartStore();
	const [complete, setComplete] = useState(false);
	const [trackingNumber, setTrackingNumber] = useState('');
	console.log(orderData, 'orderData');
	const cartPrice = cart?.map((item) => item.price).reduce((a, b) => a + b, 0);
	const total = cartPrice + orderData.shippingFee;
	const generateOrderId = () => {
		const prefix = 'PL'; // 公司代号
		const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
		return `${prefix}-${randomPart}`;
	};

	useEffect(() => {
		setTrackingNumber(generateOrderId());
	}, []);

	useEffect(() => {
		const newOrder = {
			trackingNumber: trackingNumber,
			total,
			timestamp: Date.now(), // 可选：记录下单时间
		};
		// 1. 先读取旧订单
		const storedOrders = JSON.parse(getLocalStorage(STORAGE_KEYS.ORDER) || '[]');
		// 2. 新订单放前面
		const updatedOrders = [newOrder, ...storedOrders];
		// 3. 存回 localStorage
		// 模拟支付
		const timer = setTimeout(() => {
			setComplete(true);
			localStorage.setItem(STORAGE_KEYS.ORDER, JSON.stringify(updatedOrders));
		}, 3000);

		return () => clearTimeout(timer);
	}, [total, trackingNumber]);

	useEffect(() => {
		if (complete) {
			setTimeout(() => {
				localStorage.removeItem('cart');
				resetCart();
				navigate(ROUTES.orderHistory.path);
			}, 2000);
		}
	}, [complete, navigate, resetCart]);

	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center px-6'>
				<SectionTitle title='Payment Processing' />

				<div className='flex w-full flex-row flex-gap-x-2'>
					<div className='flex w-full flex-col'>
						<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
							<div className='flex items-center'>
								<LuPackageCheck className='mr-2 size-4 text-white' />
								<p className='text-lg text-white'>Order Summary</p>
							</div>
							<p className='mt-3 text-sm/[28px] text-white'>Order ID: {trackingNumber}</p>

							<hr className='my-5 h-[2px] w-full border-none bg-grey-400' />
							<p className='mt-3 text-sm/[28px] text-white'>Total: RM {formatAmount(total)}</p>
						</div>

						<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
							<div className='flex items-center'>
								<FaRegUser className='mr-2 size-4 text-white' />
								<p className='text-lg text-white'>Customer Information</p>
							</div>
							<p className='mt-3 text-sm/[28px] text-white'>{orderData.fullName}</p>
							<p className='mt-3 text-sm/[28px] text-white'>{orderData.email}</p>
						</div>
					</div>

					<div className='flex h-full w-full flex-col'>
						<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
							<div className='flex items-center'>
								<FaRegCreditCard className='mr-2 size-4 text-white' />
								<p className='text-lg text-white'>Order Summary</p>
							</div>
							<div className='mt-4 flex h-full w-full flex-col items-center justify-center rounded-lg bg-green-300 p-8 text-center'>
								{complete ? (
									<>
										<FaCheckCircle className='size-20 text-green-100' />
										<p className='mt-6 text-xl text-white'>Payment Completed</p>
									</>
								) : (
									<>
										<p className='text-xl text-white'>Processing Payment ......</p>
										<p className='mt-6 text-sm text-white'>Processing credit card payment ......</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
