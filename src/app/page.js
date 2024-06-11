import Banner from "@/components/Banner";
import Booking from "@/components/Booking";
import CarsModel from "@/components/CarsModel";
import CompanyOverview from "@/components/CompanyOverview";
import ReasonCard from "@/components/ReasonCard";
import SectionTitle from "@/components/SectionTitle";
import ValuesCard from "@/components/ValuesCard";
import { ChevronRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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

      {/* COMPANY OVERVIEW */}
      <CompanyOverview />

      {/* BOOKING SECTION */}
      <Booking />

      {/* CARS MODEL */}
      <CarsModel />

      {/* WHY CHOOSE US */}
      <Banner />
      <section className="p-4 py-14">
        <Image
          src="/three-cars.webp"
          alt="three-cars"
          width={1000}
          height={1000}
          loading="lazy"
          className="mx-auto aspect-auto object-contain w-[70%]"
        />

        <div className="mx-auto mb-28 grid max-w-[1240px] gap-10 p-4 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-mainColor">
              Why choose us
            </p>
            <p className="text-5xl font-bold">
              Best valued deals you will ever find
            </p>
            <p className="font-medium text-secondaryTextGray">
              Discover the best deals you&lsquo;ll ever find with our unbeatable
              offers. We&lsquo;re dedicated to providing you with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don&lsquo;t miss out on your
              chance to save big.
            </p>

            <Link
              href="/about"
              className="hover:shadow-orange mt-3 flex w-[165px] items-center gap-3 rounded-md bg-mainColor px-4 py-2 text-center font-semibold text-white transition hover:scale-105">
              <button>More Detail</button>
              <ChevronRight size={28} color="#ffffff" />
            </Link>
          </div>

          <div className="space-y-8">
            <ReasonCard
              title="Cross Country Drive"
              description="Embark on the ultimate adventure with a cross-country drive.
                  Discover diverse landscapes, iconic landmarks, and the freedom
                  of the open road. Your journey of a lifetime begins here."
              imagePath="/values/car.webp"
            />
            <ReasonCard
              title="All Inclusive Pricing"
              description="Experience worry-free travel with our all-inclusive pricing.
                  No hidden fees, just straightforward and transparent rates.
                  Enjoy peace of mind as you plan your journey with confidence."
              imagePath="/values/money.webp"
            />
            <ReasonCard
              title="No Hidden Charges"
              description="Transparent and hassle-free – our commitment to you. Enjoy
                  your journey with no hidden charges. What you see is what you
                  get, ensuring a straightforward and reliable experience."
              imagePath="/values/hand.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
}
