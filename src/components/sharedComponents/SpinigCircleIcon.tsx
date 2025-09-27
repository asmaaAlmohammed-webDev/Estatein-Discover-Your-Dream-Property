/**
 * SpinigCircleIcon Component
 * --------------------------
 * This component renders a spinning circular decorative icon.
 * It consists of two concentric animated circular borders with gradients,
 * spinning in opposite directions, and an icon placed in the center.
 *
 * Props:
 * - iconURL (string): The URL of the icon image to be displayed at the center.
 *  - isValuesCard (boolean): add custom style for values card (background and margin)
 *
 * Usage:
 * <SpinigCircleIcon iconURL="/assets/icons/settings.svg" />
 *
 */

function SpinigCircleIcon({
  iconURL,
  isValuesCard,
}: {
  iconURL: string;
  isValuesCard?: boolean;
}) {
  return (
    <div
      className={`relative  ${
        isValuesCard ? "mt-0" : "mt-8"
      } xs:mt-0 w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5 z-10`}
    >
      <div
        className={`relative rounded-full ${
          isValuesCard ? "bg-Grey-08" : "bg-Grey-10"
        } w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5 flex justify-center items-center
          before:content-[''] before:absolute before:w-[calc(100%+3px)] before:h-[calc(100%+3px)] inset-0 before:rounded-full
          before:bg-[linear-gradient(40.65deg,#A685FA_0.85%,rgba(166,133,250,0)_34.8%),linear-gradient(219.04deg,#A685FA_-6.93%,rgba(166,133,250,0)_52.6%)]
          before:blur-none before:-z-10 before:animate-[spin_3s_linear_infinite]`}
      >
        <div
          className={`relative rounded-full ${
            isValuesCard ? "bg-Grey-08" : "bg-Grey-10"
          } w-9 h-9 lg:w-11 lg:h-11 2xl:w-15.5 2xl:h-15.5 
            before:content-[''] before:absolute before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:inset-0 before:rounded-full
            before:bg-[linear-gradient(130.5deg,_#A685FA_-3.27%,_rgba(166,133,250,0)_30.09%),linear-gradient(305.31deg,_#A685FA_-20.93%,_rgba(166,133,250,0)_37.94%)]
            before:blur-none before:z-1
            before:animate-[spin_reverse_3s_linear_infinite]`}
        >
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 lg:w-11 lg:h-11 2xl:w-15.5 2xl:h-15.5 ${
              isValuesCard ? "bg-Grey-08" : "bg-Grey-10"
            } rounded-full z-30 flex justify-center items-center`}
          >
            <img
              src={iconURL}
              alt="icon"
              className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8.5 2xl:h-8.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpinigCircleIcon;
