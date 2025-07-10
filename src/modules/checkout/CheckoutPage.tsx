/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineStorefront } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { GlareHover } from '../../shared/components/GlareHover';
import { Stepper } from '../../shared/components/Stepper';
import { DEVLIVERY_METHOD } from '../../shared/constants/checkoutData';
import { cn } from '../../shared/utils/cn';
import { SectionTitle } from '../home/components/SectionTitle';
import { DeliveryStepOne } from './DeliveryStepOne';
import { DeliveryStepTwo } from './DeliveryStepTwo';
import { deliverySchema, type TDeliverySchema } from './schemas';
import { DeliveryStepThree } from './DeliveryStepThree';
import { DeliveryStepFour } from './DeliveryStepFour';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';
import { PickupStepOne } from './PickupStepOne';

export const CheckoutPage = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState<number>(1);
	const [deliveryMethod, setDeliveryMethod] = useState<string>('delivery');
	const isDelivery = deliveryMethod === 'delivery';

	const checkoutForm = useForm<TDeliverySchema>({
		defaultValues: {
			country: '',
			address: '',
			shippingMethod: '',
			shippingFee: 0,
			fullName: '',
			email: '',
			phone: '',
			cardNumber: '',
			cardHolderName: '',
			expirationDate: '',
			cvv: '',
		},
		resolver: zodResolver(deliverySchema(isDelivery, step)),
	});
	const onSubmit = (data: TDeliverySchema) => {
		if (step === 1) {
			setStep(2);
		} else if (step === 2) {
			setStep(3);
		} else if (step === 3) {
			setStep(4);
		} else if (step === 4) {
			navigate(ROUTES.paymentProcessing.path, {
				state: data,
			});
		}
	};

	// console.log(checkoutForm, checkoutForm.clearErrors(), 'aaa');
	console.log(isDelivery, step, 'step');

	return (
		<div className='my-10'>
			<div className='flex flex-col items-center justify-center px-6'>
				<SectionTitle title='Checkout Process' />

				<div className='w-full px-4 md:px-8'>
					<p className='mt-6 text-white'>Complete your purchase by following the steps below</p>

					<form
						className='mt-6 flex flex-col items-center rounded-lg border border-solid border-grey-400 bg-green-400 bg-gradient-to-tl from-green-400 to-green-700 p-4 md:p-10'
						onSubmit={checkoutForm.handleSubmit(onSubmit)}
						key={deliveryMethod}
					>
						<div className='w-1/2'>
							<Stepper step={step} error={false} />
							{step === 1 && (
								<div className='flex w-full pt-4 flex-gap-2'>
									{DEVLIVERY_METHOD.map((method) => {
										return (
											<button
												key={method.id}
												type='submit'
												className={cn(
													'flex h-12 w-full items-center justify-center rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105',
													deliveryMethod === method.value && 'bg-green-200 text-white'
												)}
												onClick={() => {
													setDeliveryMethod(method.value);
													setStep(1);
												}}
											>
												{method.value === 'delivery' ? (
													<TbTruckDelivery className='size-6' />
												) : (
													<MdOutlineStorefront className='size-6' />
												)}
												<p className='ml-2 text-sm font-medium'>{method.title}</p>
											</button>
										);
									})}
								</div>
							)}
						</div>
						<div className='w-full'>
							{isDelivery && step === 1 && <DeliveryStepOne checkoutForm={checkoutForm} />}
							{!isDelivery && step === 1 && <PickupStepOne checkoutForm={checkoutForm} />}
							{step === 2 && <DeliveryStepTwo checkoutForm={checkoutForm} />}
							{step === 3 && <DeliveryStepThree checkoutForm={checkoutForm} />}
							{step === 4 && (
								<DeliveryStepFour checkoutForm={checkoutForm} isDelivery={isDelivery} />
							)}
						</div>
						<div className='flex w-full justify-between'>
							{step === 1 ? (
								<div className='mt-12 h-12 w-[56px]' />
							) : (
								<button
									type='button'
									className='mt-12 h-12 w-fit rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
									onClick={() => {
										if (step == 2) {
											setStep(1);
										} else if (step == 3) {
											setStep(2);
										} else if (step == 4) {
											setStep(3);
										}
									}}
								>
									<GlareHover
										glareColor='#ffffff'
										glareOpacity={0.3}
										glareAngle={-30}
										transitionDuration={800}
										playOnce={false}
										background='transparent'
										width='100%'
										height='100%'
										className='px-3 py-1'
									>
										<p className='text-sm font-light'>Back</p>
									</GlareHover>
								</button>
							)}

							<button
								type='submit'
								className='mt-12 h-12 w-fit rounded-lg border border-solid border-grey-300 bg-green-500 px-3 py-1 text-white active:scale-105'
							>
								<p className='text-sm font-light'>Continue</p>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
