/**
 * ThreeStars Component
 * --------------------
 * Renders a group of three decorative star-like shapes using the `Star` component.
 * - The first star is larger and uses the default golden-like color (`Grey-40`).
 * - The second and third stars are smaller and use a secondary color (`bg-Grey-20`).
 * - The size of each star is responsive (adjusts across breakpoints: base, md, 2xl).
 * - Used for decorative UI elements (e.g., rating, badges, visual highlights).

 * Star Component
 * --------------
 * A customizable visual element representing a star using 4 rounded divs positioned at each corner.
 * 
 * Note:
 * - The visual trick is made by overlapping the 4 quarter-circle backgrounds around a central point.
 */

function ThreeStars() {
  return (
    <div className="flex items-center justify-between gap-1.5 w-fit overflow-hidden">
      <Star colorClass="fill-Grey-40"/>
      <Star
        widthClass="w-3 md:w-[14.4px] 2xl:w-4.5 h-3 md:h-[14.4px] 2xl:h-4.5"
        colorClass="fill-Grey-20"
      />
      <Star
        widthClass="w-[5.6px] md:w-[6.72px] 2xl:w-[8.4px] h-[5.6px] md:h-[6.72px] 2xl:h-[8.4px]"
        colorClass="fill-Grey-20"
      />
    </div>
  );
}

export default ThreeStars;

function Star({
  colorClass = "",
  widthClass = "w-5 md:w-6 2xl:w-7.5 h-5 md:h-6 2xl:h-7.5",
}: {
  colorClass?: string;
  widthClass?: string;
}) {
  return (
    <svg
      className={`${widthClass} ${colorClass}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
    >
      <defs>
        <mask id="holeMask">
          <rect width="200" height="200" fill="white" />
          <circle cx="0" cy="0" r="100" fill="black" />
          <circle cx="0" cy="200" r="100" fill="black" />
          <circle cx="200" cy="0" r="100" fill="black" />
          <circle cx="200" cy="200" r="100" fill="black" />
        </mask>
      </defs>

      <rect width="200" height="200" mask="url(#holeMask)" />
    </svg>
  );
}
