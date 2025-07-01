import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TextInput } from '../../shared/components/TextInput';
import { SectionTitle } from '../home/components/SectionTitle';
import { Select } from '../../shared/components/Select';
import { GlareHover } from '../../shared/components/GlareHover';
import { useState } from 'react';
import { Modal } from '../../shared/components/Modal';

export const ContactUs = () => {
	const [openModal, setOpenModal] = useState(false);
	const contactSchema = z
		.object({
			fullName: z.string().min(1, { message: 'Full name is required' }),
			email: z
				.string()
				.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'Invalid email' })
				.min(1, { message: 'Email is required' }),
			relatedExistingOrder: z.string().optional(),
			orderNumber: z.string().optional(),
			moreDetails: z.string().min(1, { message: 'More details related your issues is required' }),
		})
		.superRefine((data, ctx) => {
			if (data.relatedExistingOrder === 'true' && !data.orderNumber) {
				ctx.addIssue({
					path: ['orderNumber'],
					code: z.ZodIssueCode.custom,
					message: 'Order number is required when related to an existing order',
				});
			}
		});

	type ValidationSchemaType = z.infer<typeof contactSchema>;

	const contactForm = useForm<ValidationSchemaType>({
		defaultValues: {
			fullName: '',
			email: '',
			relatedExistingOrder: 'No',
			orderNumber: '',
			moreDetails: '',
		},
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = (data: ValidationSchemaType) => {
		console.log(data, '123');
		setOpenModal(true);
	};

	return (
		<>
			<div className='my-10'>
				<div className='flex flex-col items-center justify-center px-6'>
					<SectionTitle title='Send us a message' />

					<div className='px-4 md:px-8'>
						<p className='text-lg font-bold text-white'>Online Orders</p>
						<p className='mt-6 text-white'>
							If you have any questions about your online order, send us a note through the
							submission box below. Please include your order number and necessary information to
							resolve your issue. Our customer service team is available every Mondays through
							Fridays from 10am till 6pm. Please give us 1-2 business days to get back to you.
						</p>

						<form
							className='mt-6 flex flex-col items-center rounded-lg border border-solid border-grey-400 bg-green-400 bg-gradient-to-tl from-green-400 to-green-700 p-4 md:p-10'
							onSubmit={contactForm.handleSubmit(onSubmit)}
						>
							<TextInput
								control={contactForm.control}
								name='fullName'
								label='Full Name'
								withAsterisk
								clearIcon
								onClear={() => contactForm.setValue('fullName', '')}
							/>

							<TextInput
								control={contactForm.control}
								name='email'
								label='Email'
								withAsterisk
								clearIcon
								onClear={() => contactForm.setValue('email', '')}
							/>

							<Select
								control={contactForm.control}
								name='relatedExistingOrder'
								label='Is your question about an existing order?'
								options={[
									{ label: 'No', value: 'false' },
									{ label: 'Yes', value: 'true' },
								]}
							/>

							{String(contactForm.watch('relatedExistingOrder')) === 'true' && (
								<TextInput
									control={contactForm.control}
									name='orderNumber'
									label='Order Number'
									clearIcon
									onClear={() => contactForm.setValue('orderNumber', '')}
								/>
							)}

							<TextInput
								control={contactForm.control}
								name='moreDetails'
								label='More Details'
								withAsterisk
								clearIcon
								onClear={() => contactForm.setValue('moreDetails', '')}
							/>

							<button
								type='submit'
								className='mt-4 h-12 w-full rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
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
					</div>
				</div>
			</div>
			{openModal && (
				<Modal
					title='📬 Message Sent!'
					msg='Thanks for reaching out to Planto.
We’ve received your message and will get back to you as soon as possible — usually within 1–2 business days. In the meantime, stay green and happy growing! 🌿'
					buttonTitle='Close'
					onClose={() => {
						setOpenModal(false);
						contactForm.reset();
					}}
				/>
			)}
		</>
	);
};
