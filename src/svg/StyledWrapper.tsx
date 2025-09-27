const StyledWrapper = ({gradient="bg-[radial-gradient(ellipse_at_50%_50%,#d5c3ff,#d5c3ff,#a685fa,#703bf7)]"}:{gradient?:string}) => {
  return (
    <div className={`${gradient} futuristic-pattern w-full h-full relative`}>
      <span className="ripple-overlay absolute inset-0" />
      <svg className="texture-filter hidden">
        <filter id="advanced-texture">
          <feTurbulence result="noise" numOctaves="3" baseFrequency="0.7" type="fractalNoise" />
          <feSpecularLighting result="specular" lightingColor="#fff" specularExponent="20" specularConstant="0.8" surfaceScale="2" in="noise">
            <fePointLight z="100" y="50" x="50" />
          </feSpecularLighting>
          <feComposite result="litNoise" operator="in" in2="SourceGraphic" in="specular" />
          <feBlend mode="overlay" in2="litNoise" in="SourceGraphic" />
        </filter>
      </svg>
    </div>
  );
}

export default StyledWrapper;