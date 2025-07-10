import { TiTick } from 'react-icons/ti';
import type { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';
import { TextInput } from '../../shared/components/TextInput';
import { FcSimCardChip } from 'react-icons/fc';

type TDeliveryStepThree<T extends FieldValues> = {
	checkoutForm: UseFormReturn<T>;
};
export const DeliveryStepThree = <T extends FieldValues>({
	checkoutForm,
}: TDeliveryStepThree<T>) => {
	return (
		<div className='flex w-full flex-col'>
			<p className='mt-4 text-lg text-white'>Payment Method</p>
			<div className='mt-2 flex w-fit cursor-pointer items-center rounded-lg border border-solid border-grey-300 bg-green-50 px-6 py-3'>
				<p className='text-base font-light text-grey-600'>Credit Card</p>
				<TiTick className='ml-2 size-6 text-green-500' />
			</div>
			<div className='flex w-full flex-col flex-gap-x-2 md:flex-row'>
				<div className='flex w-full flex-col'>
					<TextInput
						control={checkoutForm.control}
						name={'cardNumber' as Path<T>}
						label='Card Number'
						maxLength={16}
						withAsterisk
						clearIcon
						onClear={() =>
							checkoutForm.setValue('cardNumber' as Path<T>, '' as PathValue<T, Path<T>>)
						}
					/>

					<TextInput
						control={checkoutForm.control}
						name={'cardHolderName' as Path<T>}
						label='Card Holder Name'
						withAsterisk
						clearIcon
						onClear={() =>
							checkoutForm.setValue('cardHolderName' as Path<T>, '' as PathValue<T, Path<T>>)
						}
					/>

					<div className='flex flex-gap-x-2'>
						<TextInput
							control={checkoutForm.control}
							name={'expirationDate' as Path<T>}
							label='Expiration Date'
							withAsterisk
							clearIcon
							onClear={() =>
								checkoutForm.setValue('expirationDate' as Path<T>, '' as PathValue<T, Path<T>>)
							}
						/>

						<TextInput
							control={checkoutForm.control}
							name={'cvv' as Path<T>}
							label='CVV'
							withAsterisk
							clearIcon
							onClear={() => checkoutForm.setValue('cvv' as Path<T>, '' as PathValue<T, Path<T>>)}
						/>
					</div>
				</div>

				{/* yellow-300	yellow-500	orange-400 */}
				{/* from-cyan-500 via-blue-600 to-indigo-700 */}

				<div className='mt-8 flex w-full md:mt-0'>
					<div className='h-full w-full rounded-xl bg-gradient-to-br from-cyan-400/80 via-blue-500/70 to-indigo-800 p-6 text-white shadow-lg'>
						<div className='flex items-center justify-between'>
							<FcSimCardChip size={60} />
							<h2 className='text-lg font-semibold'>My Cool Card</h2>
						</div>
						<p className='mt-10 font-mono text-2xl text-white'>
							{checkoutForm
								.watch('cardNumber' as Path<T>)
								.match(/.{1,4}/g)
								?.join(' ')}
						</p>

						<div className='mt-5 flex flex-col text-sm'>
							<p className='font-light text-white'>CARDHOLDER NAME</p>
							<p className='font-medium text-white'>
								{checkoutForm.watch('cardHolderName' as Path<T>)?.toUpperCase()}
							</p>
						</div>

						<div className='mt-5 flex w-full justify-between'>
							<div className='flex flex-col text-right text-sm'>
								<p className='font-light text-white'>EXPIRATION DATE</p>
								<p className='font-medium text-white'>
									{checkoutForm.watch('expirationDate' as Path<T>)}
								</p>
							</div>
							<div className='flex w-1/5 flex-col text-sm'>
								<p className='font-light text-white'>CVV</p>
								<p className='font-medium text-white'>{checkoutForm.watch('cvv' as Path<T>)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
