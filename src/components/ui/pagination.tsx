import React from 'react';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { tailwindMerge } from '@/utils/functions/base';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={tailwindMerge('mx-auto flex w-full justify-center items-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={tailwindMerge('flex flex-row items-center gap-1', className)} {...props} />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={tailwindMerge('cursor-pointer', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={tailwindMerge(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      isActive && 'border-gray-300 dark:border-gray-500',
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  showIcon = true,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { showIcon?: boolean }) =>
  showIcon ? (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={tailwindMerge('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
    </PaginationLink>
  ) : (
    <span className={tailwindMerge('gap-1 pl-2.5 h-9 w-9 flex items-center justify-center', className)}>
      <span className="h-4 w-4" />
    </span>
  );
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  showIcon = true,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { showIcon?: boolean }) =>
  showIcon ? (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={tailwindMerge('gap-1 pr-2.5', className)}
      {...props}
    >
      <ChevronRightIcon className="h-4 w-4" />
    </PaginationLink>
  ) : (
    <span className={tailwindMerge('gap-1 pr-2.5 h-9 w-9 flex items-center justify-center', className)}>
      <span className="h-4 w-4" />
    </span>
  );
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={tailwindMerge('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
