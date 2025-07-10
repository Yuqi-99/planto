import type { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';
import { TextInput } from '../../shared/components/TextInput';

type TDeliveryStepTwo<T extends FieldValues> = {
	checkoutForm: UseFormReturn<T>;
};
export const DeliveryStepTwo = <T extends FieldValues>({ checkoutForm }: TDeliveryStepTwo<T>) => {
	return (
		<div className='flex w-full flex-col'>
			<TextInput
				control={checkoutForm.control}
				name={'fullName' as Path<T>}
				label='Full Name'
				withAsterisk
				clearIcon
				onClear={() => checkoutForm.setValue('fullName' as Path<T>, '' as PathValue<T, Path<T>>)}
			/>

			<TextInput
				control={checkoutForm.control}
				name={'email' as Path<T>}
				label='Email'
				placeholder='7Ml0E@example.com'
				withAsterisk
				clearIcon
				onClear={() => checkoutForm.setValue('email' as Path<T>, '' as PathValue<T, Path<T>>)}
			/>

			<TextInput
				control={checkoutForm.control}
				name={'phone' as Path<T>}
				label='Phone Number'
				placeholder='01123456789'
				withAsterisk
				clearIcon
				onClear={() => checkoutForm.setValue('phone' as Path<T>, '' as PathValue<T, Path<T>>)}
			/>
		</div>
	);
};
