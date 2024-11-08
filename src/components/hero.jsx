import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="relative bg-cover h-[95vh] md:h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/new.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-12 lg:px-16">
        <h1 className="text-white text-4xl md:text-4xl lg:text-4xl font-thin uppercase tracking-widest leading-tight mb-4 animate-slideIn">
          Crafting Elegance{" "}
          <span className="block font-semibold">One Stitch at a Time</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl lg:text-3xl mb-10 animate-slideIn delay-200">
          Bespoke dressmaking tailored to your style, your body, and your
          vision.
        </p>

        <Link
          to="appointment"
          smooth="easeInOutQuart"
          duration={700}
          className="bg-main hover:bg-opacity-80 text-gray-800 font-semibold py-3 px-10 rounded-full uppercase text-lg md:text-xl transition-transform transform hover:scale-105 shadow-lg shadow-deep-burgundy/50 hover:shadow-md hover:shadow-deep-burgundy/70 duration-300 ease-in-out animate-slideIn delay-400"
          role="button"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default Hero;
