/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { STORAGE_KEYS } from '../../shared/constants/storageKeys';
import { formatAmount } from '../../shared/utils/formatAmount';
import { getObjectLocalStorage } from '../../shared/utils/getSetStorage';
import { SectionTitle } from '../home/components/SectionTitle';
import { LuPackageCheck } from 'react-icons/lu';
import NoDataIcon from '../../shared/assets/no-data.svg?react';

export const OrderHistory = () => {
	const orderHistory: any = getObjectLocalStorage(STORAGE_KEYS.ORDER) || [];

	console.log(orderHistory, 'orderHistory');

	return (
		<div className='my-10 min-h-[50dvh]'>
			<div className='flex flex-col items-center justify-center px-6'>
				<SectionTitle title='Order History' />
				{orderHistory?.length === 0 && (
					<div className='mt-12 flex h-full w-full flex-col items-center justify-center'>
						<NoDataIcon className='text-white' />
						<p className='mt-6 text-white'>No Order History</p>
					</div>
				)}

				<div className='flex w-full flex-wrap items-center justify-between'>
					{orderHistory?.length > 0 &&
						orderHistory?.map((item: any) => {
							return (
								<div
									className='mt-4 flex w-full flex-row justify-between rounded-lg border border-solid border-grey-400 bg-green-400 p-4 md:w-[49%]'
									key={item.trackingNumber}
								>
									<div className='flex flex-col'>
										<div className='flex items-center'>
											<LuPackageCheck className='mr-2 size-5 text-white' />
											<p className='text-white'> TrackingNumber</p>
										</div>
										<p className='mt-3 text-sm text-white'>{item.trackingNumber}</p>
									</div>

									<div className='flex flex-col'>
										<div className='flex items-center'>
											<LuPackageCheck className='mr-2 size-5 text-white' />
											<p className='text-white'> Total</p>
										</div>
										<p className='mt-3 text-sm text-white'>RM {formatAmount(item.total)}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
