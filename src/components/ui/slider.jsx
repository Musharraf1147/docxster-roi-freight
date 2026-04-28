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
      <SliderPrimitive.Range className="absolute h-full bg-icon-weak" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'group flex items-center justify-center',
        'w-7 h-7 bg-bg-primary outline-none',
        'data-[disabled]:cursor-not-allowed',
      )}
    >
      <span
        className={cn(
          'block h-5 w-5 rounded-full border-2 border-icon-weak bg-bg-primary transition-colors',
          'group-focus-visible:outline group-focus-visible:outline-[3px] group-focus-visible:outline-icon-weak/40',
        )}
      />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
