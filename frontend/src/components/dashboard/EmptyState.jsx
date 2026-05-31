export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 py-16 text-center ${className}`}
    >
      {icon && (
        <div className="size-12 rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex justify-center items-center">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-base leading-6 tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-[#a1a1a1] text-sm leading-5 max-w-sm">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
