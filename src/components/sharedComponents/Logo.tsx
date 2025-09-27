const Logo = ({type="nav"}:{type?:string}) => {
  return (
    <div className="flex gap-1.5 xl:gap-2.5 md:gap-[7.25px] items-center " data-aos="fade-down">
      <img src="/assets/Symbol.png" alt="Logo" className={`aspect-square xl:w-12  ${type=="nav" ? "md:w-8.5 w-6.5": "w-8.5"}`} />
      <h1 className={`font-semibold xl:text-[28px] ${type=="nav" ? "text-xl md:text-2xl": "text-2xl"} text-White`}>
        Estatein
      </h1>
    </div>
  );
};

export default Logo;
