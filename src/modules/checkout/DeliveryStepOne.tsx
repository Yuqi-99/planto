import { TiTick } from 'react-icons/ti';
import { Select } from '../../shared/components/Select';
import { TextInput } from '../../shared/components/TextInput';
import { SHIPPING_METHOD } from '../../shared/constants/checkoutData';
import { formatAmount } from '../../shared/utils/formatAmount';
import type { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';
import { cn } from '../../shared/utils/cn';

type TDeliveryStepOne<T extends FieldValues> = {
	checkoutForm: UseFormReturn<T>;
};
export const DeliveryStepOne = <T extends FieldValues>({ checkoutForm }: TDeliveryStepOne<T>) => {
	return (
		<div className='flex w-full flex-col'>
			<Select
				control={checkoutForm.control}
				name={'country' as Path<T>}
				label='Country'
				withAsterisk
				options={[{ label: 'Malaysia', value: 'malaysia' }]}
			/>

			<TextInput
				control={checkoutForm.control}
				name={'address' as Path<T>}
				label='Address'
				withAsterisk
				clearIcon
				onClear={() => checkoutForm.setValue('address' as Path<T>, '' as PathValue<T, Path<T>>)}
			/>

			<p className='mt-4 text-lg text-white'>Shipping Methods</p>
			<div className='mt-1 flex'>
				{SHIPPING_METHOD.map((method) => {
					return (
						<div
							key={method.id}
							className={cn(
								'mr-3 flex cursor-pointer items-center rounded-lg border border-solid border-grey-300 bg-green-300 px-6 py-3 text-white',
								checkoutForm.watch('shippingMethod' as Path<T>) === method.value &&
									'bg-green-50 text-grey-600'
							)}
							onClick={() => {
								checkoutForm.setValue(
									'shippingMethod' as Path<T>,
									method.value as PathValue<T, Path<T>>
								);
								checkoutForm.setValue(
									'shippingFee' as Path<T>,
									method.shippingFee as PathValue<T, Path<T>>
								);
							}}
						>
							<div className='flex flex-col'>
								<p className='text-base font-medium'>{method.title}</p>
								<p className='text-sm font-light'>{method.details}</p>
								<p className='text-sm font-light'>RM {formatAmount(method.shippingFee)}</p>
							</div>
							{checkoutForm.watch('shippingMethod' as Path<T>) === method.value ? (
								<TiTick className='ml-4 size-6 text-green-500' />
							) : (
								<div className='ml-4 size-6' />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
