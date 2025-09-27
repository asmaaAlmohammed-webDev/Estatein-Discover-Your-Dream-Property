;

type LoaderProps = {
  size?: string;      // Tailwind size classes like 'w-12 h-12'
  center?: boolean;   // center in the parent container
};

const Loader: React.FC<LoaderProps> = ({
  size = 'w-12 h-12',
  center = true,
}) => {
  const spinner = (
    <div className={`relative ${size}`}>
      {/* Outer neon ring */}
      <div
        className="absolute inset-0 rounded-full border-4 border-Purple-60/30"
        style={{
          boxShadow:
            '0 0 14px var(--color-Purple-60), 0 0 28px var(--color-Purple-60), inset 0 0 12px rgba(112,59,247,0.35)'
        }}
      />
      {/* Rotating arc */}
      <div
        className="absolute inset-0 rounded-full border-4 border-transparent border-t-Purple-60 animate-spin"
        style={{
          boxShadow:
            '0 0 10px var(--color-Purple-60), 0 0 18px var(--color-Purple-60)'
        }}
      />
      {/* Inner pulsing dot */}
      <div
        className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-Purple-60 animate-ping"
        style={{ boxShadow: '0 0 12px var(--color-Purple-60), 0 0 24px var(--color-Purple-60)' }}
      />
    </div>
  );

  if (!center) return spinner;

  return (
    <div className="flex items-center justify-center w-full h-full">
      {spinner}
    </div>
  );
};

export default Loader;