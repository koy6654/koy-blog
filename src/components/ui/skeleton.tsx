import { tailwindMerge } from '@utils/functions/base';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={tailwindMerge(
        'animate-pulse rounded-md bg-primary/10',
        className,
      )}
      {...props}
    />
  );
}

export default Skeleton;
