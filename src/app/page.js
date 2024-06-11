import SectionTitle from "@/components/SectionTitle";
import ValuesCard from "@/components/ValuesCard";
import { ChevronRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container relative max-w-7xl">
      <section className="p-4 grid gap-1 lg:grid-cols-2 py-14">
        <div className="space-y-4">
          <span className="text-base font-semibold md:text-lg">
            Plan your trip now
          </span>
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
            Save big with our <br />
            <b className="text-mainColor">Car rental</b>
          </h1>
          <p className="text-base font-medium text-secondaryTextGray">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-4 border border-mainColor bg-mainColor px-6 py-2 font-semibold text-white transition hover:bg-white hover:text-mainColor">
              Book
              <CheckCircle size={25} />
            </button>
            <button className="flex items-center gap-3 border border-black bg-black px-6 py-4 font-bold text-white transition hover:bg-white hover:text-black">
              Learn more
              <ChevronRight size={25} />
            </button>
          </div>
        </div>
        <div className="relative hidden mx-auto select-none lg:block">
          <Image
            src="/header/main-car.webp"
            alt="car"
            width={500}
            height={500}
            loading="lazy"
            className="aspect-auto w-full"
          />
          <Image
            src="/header/city.webp"
            alt="city"
            width={300}
            height={300}
            loading="lazy"
            className="absolute right-0 top-0 -z-10 aspect-auto"
          />
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="space-y-12 p-4 py-14">
        <SectionTitle
          title="Quick & easy car rental"
          subTitle="Plan your trip now"
          description="Experience quick and easy car rentals with us! Seamlessly book your
          ride for a hassle-free journey. Your next adventure is just a click
          away."
        />

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <ValuesCard
            title=" Flexible time"
            description="Enjoy flexibility in your schedule! With our services, choose the
              time that suits you best. Your convenience, your way."
            imagePath="/superiority/time.webp"
          />
          <ValuesCard
            title="Real customer rating"
            description="Explore real customer ratings that speak volumes. Trust the
              experiences of our satisfied customers – your journey, backed by
              authenticity."
            imagePath="/superiority/rating.webp"
          />
          <ValuesCard
            title="Paylater"
            description="Experience the convenience of &lsquo;Pay Later&lsquo;. Secure your
              booking now and pay at your convenience, making travel
              arrangements stress-free and flexible."
            imagePath="/superiority/paylater.webp"
          />
        </div>
      </section>
    </main>
  );
}
