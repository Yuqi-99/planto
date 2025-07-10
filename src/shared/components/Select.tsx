import { useEffect, useRef, useState } from 'react';
import { useController, type Control, type FieldValues, type Path } from 'react-hook-form';
import { TiTick } from 'react-icons/ti';
import { cn } from '../utils/cn';
import { FaAngleDown } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

type TSelectOption = {
	label: string;
	value: string;
} & Record<string, string>;

interface ISelectProps<T extends FieldValues> {
	// isError?: boolean;
	allowClear?: boolean;
	label?: string;
	size?: 'lg' | 'md' | 'sm';
	design?: 'float' | 'fixed';
	variant?: 'base' | 'white';
	placeholder?: string;
	valueRender?: (value: TSelectOption) => React.ReactNode;
	// errorMessage?: string;
	optionRender?: (value: TSelectOption, index: number, isSelected: boolean) => React.ReactNode;
	maxOptionAreaHeight?: number;
	withAsterisk?: boolean;
	options: Array<TSelectOption>;
	name: Path<T>;
	control: Control<T>;
}

export const Select = <T extends FieldValues>({
	// isError = false,
	allowClear = true,
	label,
	size = 'lg',
	design = 'float',
	variant = 'base',
	placeholder,
	valueRender,
	// errorMessage,
	optionRender,
	options,
	maxOptionAreaHeight = 100,
	withAsterisk,
	name,
	control,
}: ISelectProps<T>) => {
	const labelToUse = label || 'select';
	// const error = Boolean(isError || errorMessage);
	const selectRef = useRef<HTMLDivElement>(null);
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
	});
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	let displayValue: string | React.ReactNode = '';
	const valueFound = options.find((option) => option.value === field.value);
	if (field.value && valueFound) displayValue = valueFound.label;
	if (field.value && valueFound && valueRender) displayValue = valueRender(valueFound);

	const displayOptions = options.map((option: TSelectOption, index) => {
		const isSelected = valueFound?.value === option.value;
		return (
			<div
				className={cn(
					'relative mb-1 flex min-h-8 cursor-pointer items-center px-2 py-2 first:mt-1',
					name === 'receiver.businessOrganizationValue'
						? 'hover:bg-green-light pr-2'
						: 'rounded-lg pr-8'
				)}
				key={option.value}
				role='option'
				aria-selected
				tabIndex={index}
				onClick={() => {
					field.onChange(option.value);
				}}
			>
				{optionRender ? (
					optionRender(option, index, isSelected)
				) : (
					<div className='text-nowrap'>{option.label}</div>
				)}
				{isSelected && (
					<div className='absolute right-2 top-1/2 -translate-y-1/2'>
						<TiTick className='size-6 text-green-200' />
					</div>
				)}
			</div>
		);
	});

	useEffect(() => {
		const closeWhenClickOutside = (e: Event) => {
			if (!selectRef.current) {
				return;
			}
			if (!selectRef.current.contains(e.target as Node)) {
				setIsExpanded(false);
			}
		};
		document.body.addEventListener('click', closeWhenClickOutside);
		return () => {
			document.body.removeEventListener('click', closeWhenClickOutside);
		};
	}, [isExpanded, setIsExpanded]);

	return (
		<label htmlFor={labelToUse} className='w-full'>
			{label && (
				<span className={cn('mb-1.5 mt-3 inline-block text-sm text-white', !label && 'hidden')}>
					{labelToUse}
					{withAsterisk && <span className='text-[#fa5e5e]'>*</span>}
				</span>
			)}
			<div
				ref={selectRef}
				className={cn(
					'group relative w-full cursor-pointer rounded-lg border px-3.5 transition-all',
					design === 'float' && {
						'text-darkGrey-normal border-green-300 bg-green-300': !error,
						'border-white bg-white': variant === 'white',
						'border-green-300': isExpanded,
					},
					design === 'fixed' && {
						'shadow-inputBox border-white bg-white text-white': !error,
						'rounded-b-none': isExpanded,
					},
					error && 'text-red-[#fa5e5e] border-red-600'
				)}
				role='list'
				onClick={() => {
					setIsExpanded((curr) => !curr);
				}}
			>
				<div
					className={cn('relative flex items-center', {
						'min-h-[46px] text-base': size === 'lg',
						'min-h-[38px] text-sm': size === 'md',
						'min-h-[30px] text-sm': size === 'sm',
					})}
				>
					<div
						className={cn(
							'grow overflow-hidden text-ellipsis whitespace-nowrap text-nowrap pr-6 text-white',
							!displayValue && !error && 'text-sm text-white'
						)}
					>
						{displayValue || placeholder || 'Select Options'}
					</div>
					<div
						className={cn(
							'absolute right-0 top-1/2 z-10 w-3 flex-shrink-0 -translate-y-1/2 transition duration-300',
							isExpanded && 'rotate-180',
							field.value && allowClear && 'group-hover:opacity-0'
						)}
					>
						<FaAngleDown className='text-white' />
					</div>
					{allowClear && (
						<div
							role='cell'
							onClick={() => field.onChange('')}
							className={cn(
								'absolute right-2 top-1/2 z-10 w-3 flex-shrink-0 -translate-y-1/2 opacity-0 transition duration-300',
								field.value && 'group-hover:opacity-100'
							)}
						>
							<MdDeleteForever className='size-6 text-white' />
						</div>
					)}
				</div>
				<div
					className={cn(
						'no-scrollbar text-grey-darker shadow-inputBox absolute -left-[1px] z-10 w-fit min-w-[calc(100%+2px)] overflow-hidden bg-green-300 px-1.5 text-white transition-all duration-300',
						design === 'float' && '-bottom-2 translate-y-full rounded-lg',
						design === 'fixed' && {
							'rounded-b-lg': true,
							'border-t': isExpanded,
							'border-t-red-600': error,
						},
						isExpanded && 'overflow-y-scroll border border-solid border-grey-300'
					)}
					style={{
						maxHeight: isExpanded ? `${maxOptionAreaHeight}px` : '0px',
					}}
				>
					{isExpanded && displayOptions}
				</div>
			</div>
			{error?.message && (
				<span className='mt-1.5 inline-block text-xs text-red-500'>{error.message}</span>
			)}
		</label>
	);
};
