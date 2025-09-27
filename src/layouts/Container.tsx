import type { ReactNode } from "react";
/**
 * Container Component
 * -------------------
 * A reusable layout wrapper that adds horizontal padding to its content.
 * It ensures consistent spacing on different screen sizes using Tailwind's responsive `px` values.
 *
 * Props:
 * - `children`: ReactNode — The nested content to be rendered inside the container.
 * - `className`: string — Additional Tailwind classes or custom styles to apply to the <section>.
 *
 * Usage:
 * Use this component to wrap sections of your page content with consistent padding.
 */

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-[4.1025%] md:px-[5.5555%] xl:px-[8.4375%] flex flex-col justify-between gap-10 md:gap-15 xl:gap-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;
