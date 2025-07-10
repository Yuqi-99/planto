/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FaRegUser } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { FaRegCreditCard } from 'react-icons/fa6';
import { useCartStore } from '../../shared/stores/useCartStore';
import { formatAmount } from '../../shared/utils/formatAmount';

type TDeliveryStepOne<T extends FieldValues> = {
	checkoutForm: UseFormReturn<T>;
	isDelivery: boolean;
};

export const DeliveryStepFour = <T extends FieldValues>({
	checkoutForm,
	isDelivery,
}: TDeliveryStepOne<T>) => {
	const { cart } = useCartStore();
	const cartPrice = cart?.map((item) => item.price).reduce((a, b) => a + b, 0);
	const total = cartPrice + checkoutForm.watch('shippingFee' as Path<T>);

	console.log(checkoutForm, 'checkoutForm');

	return (
		<div className='flex flex-col'>
			<p className='mt-10 text-xl text-white'>Order Confrimation</p>
			{/* personal info */}
			<div className='flex w-full flex-col flex-gap-x-2 md:flex-row'>
				<div className='flex w-full flex-col'>
					<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
						<div className='flex items-center'>
							<FaRegUser className='mr-2 size-4 text-white' />
							<p className='text-white'>Customer Information</p>
						</div>
						<p className='mt-3 text-sm/[28px] text-white'>
							{checkoutForm.watch('fullName' as Path<T>)}
						</p>
						<p className='text-sm/[28px] text-white'>{checkoutForm.watch('email' as Path<T>)}</p>
						<p className='text-sm/[28px] text-white'>{checkoutForm.watch('phone' as Path<T>)}</p>
					</div>

					<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
						<div className='flex items-center'>
							<GrLocation className='mr-2 size-5 text-white' />
							<p className='text-white'>Delivery Information</p>
						</div>
						{isDelivery ? (
							<>
								<p className='mt-3 text-sm/[28px] text-white'>
									{checkoutForm.watch('country' as Path<T>)?.toUpperCase()}
								</p>
								<p className='text-sm/[28px] text-white'>
									{checkoutForm.watch('address' as Path<T>)}
								</p>
							</>
						) : (
							<p className='mt-3 text-sm/[28px] text-white'>Pickup</p>
						)}
					</div>

					<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
						<div className='flex items-center'>
							<FaRegCreditCard className='mr-2 size-4 text-white' />
							<p className='text-white'>Payment Information</p>
						</div>
						<p className='mt-3 text-sm/[28px] text-white'>Credit Card</p>
					</div>
				</div>

				{/* cart list */}
				<div className='flex w-full flex-col'>
					<div className='lex mt-2 w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
						<div className='max-h-[210px] overflow-y-scroll'>
							{cart?.length > 0 &&
								cart?.map((item) => {
									return (
										<div className='my-4 flex justify-between text-white'>
											<div className='flex'>
												<img src={item.img} alt={item.name} className='size-12 rounded-full' />
												<div className='ml-3 flex flex-col'>
													<p className='text-medium'>{item.name}</p>
													<p className='text-light text-xs'>Quantity: {item.quantity}</p>
												</div>
											</div>
											<p className='text-bold w-24 min-w-24'>RM {formatAmount(item.total)}</p>
										</div>
									);
								})}
						</div>

						<hr className='my-5 h-[2px] w-full border-none bg-grey-400' />

						<div className='flex justify-between text-sm text-white'>
							<p className='text-normal'>Subtotal</p>
							<p className='text-normal'>RM {formatAmount(cartPrice)}</p>
						</div>

						<div className='flex justify-between text-sm text-white'>
							<p className='text-normal'>Shipping Fee</p>
							<p className='text-normal'>
								RM {formatAmount(checkoutForm.watch('shippingFee' as Path<T>))}
							</p>
						</div>

						<hr className='my-5 h-[2px] w-full border-none bg-grey-400' />

						<div className='flex justify-between text-lg text-white'>
							<p className='text-bold'>Total</p>
							<p className='text-bold'>RM {formatAmount(total)}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
