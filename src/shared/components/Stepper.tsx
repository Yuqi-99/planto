// import { Fragment } from 'react';
// import { TiTick } from 'react-icons/ti';
// import { cn } from '../utils/cn';

// type TStepper = {
// 	step: number;
// 	error: boolean;
// };

// export const Stepper = ({ step, error }: TStepper) => {
// 	return (
// 		<div className='my-2 flex w-full flex-row items-center justify-around px-4'>
// 			<div>
// 				<hr className='h-[2px] w-20' />
// 			</div>
// 			{[1, 2].map((num, index) => {
// 				return (
// 					<Fragment key={num}>
// 						{index !== 0 && <hr className='h-[2px]' />}
// 						<div
// 							className={cn(
// 								'flex size-7 min-w-7 items-center justify-center rounded-full text-sm text-white',
// 								step >= num + 3 ? 'bg-green-200' : 'bg-green-700',
// 								num === 2 && step === 4 && error && 'bg-grey-normal'
// 							)}
// 						>
// 							{step >= num + 4 ? <TiTick className='size-3 text-white' /> : num}
// 						</div>
// 					</Fragment>
// 				);
// 			})}
// 			<div>
// 				<hr className='h-[2px] w-20' />
// 			</div>
// 		</div>
// 	);
// };

import { Fragment } from 'react';
import { TiTick } from 'react-icons/ti';
import { cn } from '../utils/cn';

type TStepper = {
	step: number; // 当前步骤
	error: boolean; // 是否错误
};

export const Stepper = ({ step, error }: TStepper) => {
	const totalSteps = 4;

	return (
		<div className='my-2 flex w-full flex-row items-center justify-around px-4'>
			{Array.from({ length: totalSteps }, (_, index) => {
				const currentStep = index + 1;
				const isCompleted = step > currentStep;
				// const isActive = step === currentStep;
				const isError = currentStep === step && error;

				return (
					<Fragment key={currentStep}>
						{index > 0 && (
							<hr
								className={cn(
									'h-[4px] flex-1 border-0',
									step > index + 1 ? 'bg-green-200' : 'bg-grey-400'
								)}
							/>
						)}
						<div
							className={cn(
								'flex size-8 min-w-8 items-center justify-center rounded-full text-sm text-white',
								isCompleted ? 'bg-green-200' : 'border border-solid border-grey-400 bg-green-300',
								isError && 'bg-grey-normal'
							)}
						>
							{isCompleted ? <TiTick className='size-4 text-white' /> : currentStep}
						</div>
					</Fragment>
				);
			})}
		</div>
	);
};
