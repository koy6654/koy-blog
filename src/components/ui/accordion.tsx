'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { tailwindMerge } from '@/utils/functions/base';

// const Accordion = AccordionPrimitive.Root;
const Accordion = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
		className?: string;
	}
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Root
		ref={ref}
		className={tailwindMerge('w-full', className)}
		{...props}
	/>
));
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
		className?: string;
	}
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={tailwindMerge('', className)}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
		className?: string;
	}
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={tailwindMerge(
				'flex flex-1 items-center justify-between text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
		className?: string;
	}
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}
	>
		<div className={tailwindMerge('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
