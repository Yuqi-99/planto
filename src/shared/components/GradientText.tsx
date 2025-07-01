import '../style/GradientText.css';
import { cn } from '../utils/cn';

type TGradientText = {
	children: React.ReactNode;
	className?: string;
	colors?: string[];
	animationSpeed?: number;
	showBorder?: boolean;
};

export const GradientText = ({
	children,
	className = '',
	colors = ['#BCFFBEFF', '#C6C8C6', '#BCFFBEFF', '#C6C8C6', '#BCFFBEFF'],
	animationSpeed = 8,
	showBorder = false,
}: TGradientText) => {
	const gradientStyle = {
		backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
		animationDuration: `${animationSpeed}s`,
	};

	return (
		<div className={cn('animated-gradient-text', className)}>
			{showBorder && <div className='gradient-overlay' style={gradientStyle}></div>}
			<div className='text-content' style={gradientStyle}>
				{children}
			</div>
		</div>
	);
};
