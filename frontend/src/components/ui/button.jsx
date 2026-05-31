import { cn } from '@/lib/utils';

const variants = {
  default:
    'bg-neutral-200 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-300',
  secondary:
    'bg-neutral-800 text-neutral-50 border border-white/10 hover:bg-neutral-700 active:bg-neutral-600',
  outline:
    'bg-transparent text-neutral-50 border border-white/10 hover:bg-neutral-800 active:bg-neutral-700',
  ghost:
    'bg-transparent text-neutral-50 hover:bg-neutral-800 active:bg-neutral-700',
  destructive:
    'bg-transparent text-[#ff6467] border border-[#ff6467]/40 hover:bg-[#ff6467]/10 active:bg-[#ff6467]/20',
};

const sizes = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 px-3 text-xs',
  lg: 'h-11 px-6 text-sm',
  icon: 'size-9 p-0',
};

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  type = 'button',
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
        'transition-all duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-50/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
