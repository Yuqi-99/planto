import { z } from 'zod';

export const deliverySchema = (isDelivery: boolean, step: number) =>
	z.object({
		country:
			step === 1 ? z.string().min(1, { message: 'Country is required' }) : z.string().optional(),
		address:
			isDelivery && step === 1
				? z.string().min(1, { message: 'Address is required' })
				: z.string().optional(),
		shippingMethod:
			isDelivery && step === 1
				? z.string().min(1, { message: 'Shipping method is required' })
				: z.string().optional(),
		shippingFee:
			isDelivery && step === 1
				? z.number().min(1, { message: 'Shipping fee is required' })
				: z.number().optional(),
		// Step2
		fullName:
			step === 2 ? z.string().min(1, { message: 'Full name is required' }) : z.string().optional(),
		email:
			step === 2
				? z
						.string()
						.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'Invalid email' })
						.min(1, { message: 'Email is required' })
				: z.string().optional(),
		phone: step === 2 ? z.string().min(1, { message: 'Phone is required' }) : z.string().optional(),
		// Step3
		cardNumber:
			step === 3
				? z
						.string()
						.min(1, { message: 'Card number is required' })
						.max(16, { message: 'Invalid card number' })
				: z.string().optional(),
		cardHolderName:
			step === 3
				? z.string().min(1, { message: 'Card holder is required' })
				: z.string().optional(),
		expirationDate:
			step === 3
				? z.string().min(1, { message: 'Expiration date is required' })
				: z.string().optional(),
		cvv: step === 3 ? z.string().min(1, { message: 'CVV is required' }) : z.string().optional(),
	});

export type TDeliverySchema = z.infer<ReturnType<typeof deliverySchema>>;
