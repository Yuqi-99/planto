import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { Select } from '../../shared/components/Select';

type TPickupStepOne<T extends FieldValues> = {
	checkoutForm: UseFormReturn<T>;
};
export const PickupStepOne = <T extends FieldValues>({ checkoutForm }: TPickupStepOne<T>) => {
	return (
		<div className='flex w-full flex-col'>
			<Select
				control={checkoutForm.control}
				name={'country' as Path<T>}
				label='Country'
				withAsterisk
				options={[{ label: 'Malaysia', value: 'malaysia' }]}
			/>

			<p className='mt-4 text-lg text-white'>Pickup Address</p>
			<div className='mt-2 flex w-full flex-col rounded-lg border border-solid border-grey-400 bg-green-400 p-4'>
				<p className='text-sm text-white'>You can pick up at</p>
				<p className='mt-2 text-white'>
					No. 25, Jalan Bunga Raya 3, Taman Indah, 43000 Kajang, Selangor, Malaysia
				</p>
			</div>
		</div>
	);
};
