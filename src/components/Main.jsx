import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Calendar, Ruler, Clock } from "lucide-react";

const portfolioImages = [
  { src: "assets/bg.jpg", alt: "Custom Dress Design 1" },
  { src: "assets/bg3.jpg", alt: "Custom Dress Design 2" },
  { src: "assets/hero.jpg", alt: "Custom Dress Design 3" },
  { src: "assets/hero1.jpg", alt: "Custom Dress Design 4" },
  { src: "assets/bg.jpg", alt: "Custom Dress Design 4" },
  { src: "assets/bg.jpg", alt: "Custom Dress Design 4" },
];

const PortfolioItem = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <img src={src} alt={alt} className="w-full h-82 object-cover" />
  </div>
);

const ServiceCard = ({ Icon, title, description }) => (
  <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
    <div className="mb-4 flex justify-center">
      <Icon className="h-12 w-12 text-purple-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MainSections = () => (
  <div className="w-full">
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ServiceCard
            Icon={Calendar}
            title="Consultations"
            description="Personal fitting sessions and style consultations tailored to your needs."
          />
          <ServiceCard
            Icon={Ruler}
            title="Custom Design"
            description="Bespoke dressmaking services with premium fabrics and perfect fit."
          />
          <ServiceCard
            Icon={Clock}
            title="Alterations"
            description="Professional alterations to ensure your perfect fit."
          />
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
      
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {portfolioImages.map(({ src, alt }, index) => (
            <SwiperSlide key={index}>
              <PortfolioItem src={src} alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 text-center">
          <a
            href="/lookbook" // Change this to your actual Lookbook route
            className="bg-deep-burgundy hover:bg-opacity-90 text-red-700 font-medium py-3 px-8 rounded-full uppercase text-lg transition duration-300 ease-in-out"
          >
            See More
          </a>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Measurement Guide</h2>
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-50 p-8 shadow-md">
          <GuideSection
            title="Before Your Fitting"
            items={[
              "Wear fitted clothing for accurate measurements",
              "Bring the shoes you plan to wear with your dress",
              "Don't wear bulky clothing or heavy accessories",
              "Schedule your fitting at least 3 months before your event",
            ]}
          />
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <MeasurementArea
              title="Upper Body"
              items={["Bust", "Waist", "Shoulders", "Arms"]}
            />
            <MeasurementArea
              title="Lower Body"
              items={["Hips", "Length", "Inseam", "Hem"]}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const GuideSection = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <ul className="list-inside list-disc space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const MeasurementArea = ({ title, items }) => (
  <div className="rounded-lg bg-white p-4 shadow">
    <h4 className="mb-2 font-semibold">{title}</h4>
    <ul className="list-inside list-disc text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default MainSections;
