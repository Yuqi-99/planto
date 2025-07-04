import { cn } from '../utils/cn';
import { GlareHover } from './GlareHover';
import { ModalOverlay } from './ModalOverlay';

type TModal = {
	title: string;
	msg: string;
	buttonTitle: string;
	confirmButtonTitle?: string;
	img?: string;
	className?: string;
	onClose?: () => void;
	onConfirm?: () => void;
};

export const Modal = ({
	title,
	msg,
	buttonTitle,
	confirmButtonTitle,
	img,
	className,
	onClose,
	onConfirm,
}: TModal) => {
	// h-full max-h-[90vh] w-full
	return (
		<div className='fixed z-[9999] flex h-full w-full min-w-[inherit] max-w-[inherit]'>
			<ModalOverlay
				onClose={() => {
					onClose?.();
				}}
			/>
			<div className='fixed left-1/2 top-1/2 z-modal-content flex h-auto max-h-[90vh] w-screen min-w-[inherit] max-w-[640px] -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
				<div className='absolute z-modal-content flex h-auto max-h-[90vh] w-[94%] flex-col items-center justify-center rounded-xl border border-grey-300 bg-green-700'>
					{/* Modal body */}
					<div className={cn('flex flex-col items-center px-4', className)}>
						<div className='mb-2 max-w-[340px] pb-2 pt-8'>
							<p className='text-2xl font-bold leading-6 text-white'>{title}</p>
						</div>

						<div className='flex flex-col gap-4'>
							{img && (
								<div className='blurred-img flex h-fit max-h-[150px] min-h-[80px] w-full animate-pulse justify-center bg-gray-200'>
									<img src={img} alt='game banner' className='flex h-full max-h-[150px] w-full' />
								</div>
							)}

							<div
								className={cn(
									'my-10 flex h-full max-h-[50vh] flex-col justify-start overflow-y-auto px-4 text-center',
									img ? 'max-h-[35vh]' : 'max-h-[50vh]'
								)}
							>
								<p className='font-normal text-white'>{msg}</p>
							</div>
						</div>
						<div
							className={cn('flex w-full flex-row', onConfirm ? 'flex-gap-x-2' : 'justify-center')}
						>
							<button
								type='button'
								className='mb-8 mt-4 w-1/2 rounded-lg border border-solid border-grey-300 text-grey-300 active:scale-105'
								onClick={() => {
									onClose?.();
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
									className='px-2 py-2'
								>
									<p className='text-sm font-light'>{buttonTitle}</p>
								</GlareHover>
							</button>

							{onConfirm && (
								<button
									type='button'
									className='mb-8 mt-4 w-1/2 rounded-lg border border-solid border-grey-300 bg-red-800 text-grey-300 active:scale-105'
									onClick={() => {
										onConfirm?.();
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
										className='px-2 py-2'
									>
										<p className='text-sm font-light'>{confirmButtonTitle}</p>
									</GlareHover>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
