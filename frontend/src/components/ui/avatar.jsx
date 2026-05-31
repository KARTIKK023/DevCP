export function Avatar({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarFallback({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}