import { cn } from '../utils/cn';

type TShinyText = {
	text: string;
	disabled?: boolean;
	speed?: number;
	shineColor?: string;
	className?: string;
};

export const ShinyText = ({
	text,
	disabled = false,
	speed = 5,
	shineColor = 'rgba(255, 255, 255, 0.8)',
	className = '',
}: TShinyText) => {
	const animationDuration = `${speed}s`;

	return (
		<div
			className={cn(
				'inline-block bg-clip-text text-[#e0e0e0a6]',
				disabled ? '' : 'animate-shine',
				className
			)}
			style={{
				backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0) 40%, ${shineColor} 50%, rgba(255,255,255,0) 60%)`,
				backgroundSize: '200% 100%',
				WebkitBackgroundClip: 'text',
				animationDuration: animationDuration,
			}}
		>
			{text}
		</div>
	);
};
