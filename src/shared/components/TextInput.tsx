import { useCallback, useState } from 'react';
import { useController, type Control, type FieldValues, type Path } from 'react-hook-form';
import { RxCrossCircled } from 'react-icons/rx';
import { cn } from '../utils/cn';

interface ITextInputProps<T extends FieldValues>
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	icon?: React.ReactElement;
	rightIcon?: React.ReactElement;
	clearIcon?: boolean;
	placeholder?: string;
	name: Path<T>;
	control: Control<T>;
	withAsterisk?: boolean;
	onClear?: () => void;
	// id?: string;
}

export const TextInput = <T extends FieldValues>({
	label,
	icon,
	rightIcon,
	clearIcon,
	placeholder,
	name,
	control,
	withAsterisk,
	// id,
	onClear,
	...props
}: ITextInputProps<T>) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
	});

	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	return (
		<div className='w-full'>
			{label && (
				<p className='mb-1.5 mt-3 inline-block text-sm font-normal text-white'>
					{label}
					{withAsterisk && <span className='text-[#fa5e5e]'>*</span>}
				</p>
			)}
			<div className='relative'>
				{icon && icon}
				<input
					{...field}
					{...props}
					className={cn(
						'w-full rounded-lg bg-green-300 py-3 pr-4 text-base font-normal text-white focus:outline focus:outline-0 focus:outline-grey-300',
						icon ? 'pl-12' : 'pl-4',
						props.className
					)}
					type='text'
					inputMode='text'
					placeholder={placeholder || ''}
					autoComplete='off'
					autoCorrect='off'
					autoCapitalize='off'
					spellCheck='false'
					onChange={(newValue) => field.onChange(newValue)}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{rightIcon && rightIcon}
				{isFocused && field.value !== '' && clearIcon && (
					<button
						aria-label='clear'
						type='button'
						className='absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full'
						onMouseDown={(event) => {
							event.preventDefault();
							onClear?.();
						}}
					>
						<RxCrossCircled className='size-6 text-white' />
					</button>
				)}
			</div>
			{error && <p className='mt-1.5 text-xs font-normal text-red-500'>{error.message}</p>}
		</div>
	);
};
