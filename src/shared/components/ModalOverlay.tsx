type TModalOverlayProps = {
	onClose: () => void;
};

export const ModalOverlay = ({ onClose }: TModalOverlayProps) => {
	return (
		<div
			className='z-modal-overlay fixed left-1/2 top-0 h-screen w-screen min-w-[inherit] max-w-[inherit] -translate-x-1/2 bg-black bg-opacity-50'
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					onClose();
				}
			}}
		/>
	);
};
