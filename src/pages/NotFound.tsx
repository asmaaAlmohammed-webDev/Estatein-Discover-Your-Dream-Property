import Button from "../components/sharedComponents/Button";

const NotFound = () => {
  return (
    <div className="min-h-[100vh] w-full flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 40%, var(--color-Grey-08) 0%, var(--color-Grey-15) 58%, var(--color-Grey-10) 100%), linear-gradient(180deg, var(--color-Grey-15) 0%, var(--color-Grey-08) 100%)",
      }}>
      <div
        className="relative w-full max-w-4xl text-center border border-Grey-15 bg-Grey-10/60 backdrop-blur-lg rounded-xl p-8 md:p-12 overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(112, 59, 247, 0.08)" }}
      >
        {/* Massive 404 background with neon glow */}
        <div className="absolute inset-0 z-10 flex items-center justify-center select-none">
          <span
            className="font-extrabold tracking-tighter leading-none text-[36vw] md:text-[28vw] lg:text-[20vw] text-Purple-60/20 animate-neon mix-blend-screen motion-reduce:animate-none"
            style={{
              textShadow:
                "0 0 16px var(--color-Purple-60), 0 0 36px var(--color-Purple-60), 0 0 64px var(--color-Purple-60)",
            }}
          >
            404
          </span>
        </div>

        {/* Dramatic overlay above the number */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, var(--color-Grey-08) 0%, var(--color-Grey-10) 80%, linear-gradient(180deg, var(--color-Grey-70) 30%, var(--color-Grey-60) 100%)",
          }}
        />

        {/* Noise texture overlay */}
        <div className="pointer-events-none absolute inset-0 z-40 opacity-[0.05] bg-[url('/assets/noise.png')] bg-repeat" />

        {/* Foreground content */}
        <div className="relative z-30 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-semibold leading-[120%] bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--color-White),var(--color-Purple-60))]">
            Page not found
          </h2>
          <p className="mt-3 md:mt-4 text-Grey-60 md:text-lg leading-[150%] max-w-2xl">
            The page you are looking for doesn't exist or has been moved.
          </p>

          {/* Accent underline with neon effect */}
          <div
            className="mt-5 h-[2px] w-24 md:w-32"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--color-Purple-60) 50%, transparent 100%)",
              boxShadow: "0 0 24px var(--color-Purple-60)",
            }}
          />

          {/* Actions */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              content="Go Home"
              withBorder
              className="w-full sm:w-auto hover:bg-Grey-15"
              link="/"
            />
            <Button
              content="Contact Us"
              className="w-full sm:w-auto bg-Purple-60 hover:bg-Purple-65 shadow-[0_0_32px_rgba(112,59,247,0.45)] hover:shadow-[0_0_42px_rgba(112,59,247,0.6)]"
              link="/contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;