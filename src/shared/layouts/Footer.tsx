import { useNavigate } from 'react-router-dom';
import PlantoLogo from '../assets/planto-logo.svg?react';
import { ROUTES } from '../constants/routes';
import { CONTACT_US_DROPDOWN, SHOP_DROPDOWN } from '../constants/dropdownData';
import { cn } from '../utils/cn';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '../components/TextInput';
import { GlareHover } from '../components/GlareHover';
import { useState } from 'react';
import { Modal } from '../components/Modal';

export const Footer = () => {
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const NAVIGATION_PATH = [
		{ id: 1, title: 'Home', navigate: ROUTES.home.path },
		SHOP_DROPDOWN,
		CONTACT_US_DROPDOWN,
	];
	const schema = z.object({
		email: z
			.string()
			.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'Invalid email' })
			.optional(),
	});

	type ValidationSchemaType = z.infer<typeof schema>;

	const footerForm = useForm<ValidationSchemaType>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: ValidationSchemaType) => {
		console.log(data);
		setOpenModal(true);
	};

	return (
		<>
			<div className='flex min-h-56 w-full justify-center bg-footerBgColor p-8 pb-12'>
				<div className='flex w-full max-w-[1440px] flex-col items-center justify-between flex-gap-x-4 sm:flex-row'>
					<div className='flex w-full flex-col sm:w-1/3'>
						<div
							className='flex cursor-pointer items-center flex-gap-x-2'
							onClick={() => navigate(ROUTES.home.path)}
						>
							<PlantoLogo className='size-12' />
							<p className='text-2xl font-bold text-grey-300'>Planto.</p>
						</div>
						<p className='mt-6 text-xs font-light text-white'>
							Welcome to Planto – Your Trusted Destination for Beautiful, Healthy Plants. We offer a
							wide variety of indoor and outdoor plants, carefully curated to bring life and
							freshness to your home or workspace. Whether you're a beginner or a plant enthusiast,
							Planto is here to help you grow.
						</p>
					</div>

					<div className='flex w-full flex-col sm:min-h-[132px] sm:w-1/4'>
						<div className='mb-4 mt-10 flex items-center flex-gap-x-2 sm:mb-6'>
							<p className='text-sm font-bold text-white'>Quick Link's</p>
						</div>
						<div className='flex flex-wrap items-center flex-gap-y-2 sm:flex-col sm:items-start sm:justify-between'>
							{NAVIGATION_PATH?.flat().map((item, index) => {
								const length = NAVIGATION_PATH?.flat()?.length;
								return (
									<>
										<p
											key={`${index}-${item.id}`}
											className='cursor-pointer text-xs font-normal text-white hover:scale-105'
											onClick={() => navigate(item.navigate)}
										>
											{item.title}
										</p>
										<p
											className={cn(
												'inline-block px-2 text-white sm:hidden',
												length === index + 1 && 'hidden'
											)}
										>
											|
										</p>
									</>
								);
							})}
						</div>
					</div>

					<div className='relative flex h-full w-full flex-col sm:w-1/3 md:min-h-[132px]'>
						<div className='mb-4 mt-10 flex flex-col justify-center flex-gap-x-2 sm:mb-6'>
							<p className='text-sm font-bold text-white'>For Every Update.</p>
						</div>
						<p className='text-sm font-bold text-white'>Enter your email</p>
						<form
							className='relative mt-4 flex h-full flex-col items-center flex-gap-x-2 md:mt-10 md:h-12 md:flex-row md:justify-center'
							onSubmit={footerForm.handleSubmit(onSubmit)}
						>
							<TextInput
								control={footerForm.control}
								name='email'
								className='h-12'
								onClear={() => footerForm.setValue('email', '')}
							/>
							<button
								type='submit'
								className={cn(
									'mt-4 h-12 w-full rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105 md:mt-0 md:w-fit',
									footerForm?.formState?.errors?.email && 'mb-0 md:mb-5'
								)}
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
									<p className='text-sm font-light'>Submit</p>
								</GlareHover>
							</button>
						</form>
						<p className='mt-4 text-xs font-normal text-white md:absolute md:bottom-0 md:mt-0'>
							planto © all right reserve
						</p>
					</div>
				</div>
			</div>
			{openModal && (
				<Modal
					title='Thank you for connecting'
					msg='We’re thrilled to have you join the Planto community. 🌿
Stay tuned for plant care tips, special offers, and a little green joy in your inbox soon!'
					buttonTitle='Close'
					onClose={() => {
						setOpenModal(false);
						footerForm.reset();
					}}
				/>
			)}
		</>
	);
};
