interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Divider = ({ className, orientation = 'horizontal' }: DividerProps) => {
  return (
    <div
      className={`${className ?? ''} ${orientation === 'vertical' ? 'border-r' : 'border-t'} border-gray-300 dark:border-gray-600`}
      style={{
        [orientation === 'vertical' ? 'width' : 'height']: '1px',
      }}
    />
  );
};

export default Divider;
