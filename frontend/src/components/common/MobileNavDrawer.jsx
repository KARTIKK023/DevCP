export default function MobileNavDrawer({ open, onClose, children }) {
  return (
    <>
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[min(100vw-3rem,16rem)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {children}
      </div>
    </>
  );
}
