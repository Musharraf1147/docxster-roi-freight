import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative grow h-4 overflow-hidden rounded-sm bg-bg-subtle">
      <SliderPrimitive.Range className="absolute h-full bg-icon-strong" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block w-2 h-6 rounded-sm border-[1.5px] border-icon-strong bg-bg-primary shadow-xs',
        'transition-shadow duration-150 ease-out-expo',
        'hover:shadow-sm active:shadow-md',
        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-icon-strong/30',
        'data-[disabled]:cursor-not-allowed',
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
