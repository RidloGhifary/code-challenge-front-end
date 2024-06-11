import Image from "next/image";

export default function Page() {
  return (
    <section className="p-4 py-14">
      <div className="grid items-center justify-center gap-6 md:grid-cols-2 md:gap-0">
        <div className="mx-auto ">
          <Image
            src="/ceo.webp"
            alt="ceo"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-full border-8 border-mainColor aspect-auto w-[300px]"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold leading-tight">
            <span className="text-mainColor">Car rental</span> prides itself on
            having a diverse and experienced team dedicated to providing
            exceptional service.
          </h1>
          <p className="text-secondaryTextGray">
            Founded in 2015, Car Rental began with a small fleet of economy cars
            in a single location. Over the years, the company expanded its
            offerings to include a wide range of vehicles and services, becoming
            a trusted name in the car rental industry. Today, Car Rental
            operates multiple locations nationwide, with a commitment to
            customer satisfaction and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
