interface DividerProps {
	className?: string;
	orientation?: 'horizontal' | 'vertical';
}

function Divider({ className, orientation = 'horizontal' }: DividerProps) {
	return (
		<div
			className={`${className} ${orientation === 'vertical' ? 'border-l' : 'border-t'} border-gray-300 dark:border-gray-600`}
			style={{
				[orientation === 'vertical' ? 'width' : 'height']: '100%',
			}}
		/>
	);
}

export default Divider;
