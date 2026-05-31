export function Card({
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

export function CardHeader({
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

export function CardContent({
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

export function CardTitle({
  children,
  className = "",
  ...props
}) {
  return (
    <h3
      className={className}
      {...props}
    >
      {children}
    </h3>
  );
}
export function CardFooter({
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