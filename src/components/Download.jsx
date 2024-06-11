import Image from "next/image";

export default function Download() {
  return (
    <section className="relative mx-auto w-full bg-backgroundLightGray p-4 py-14">
      <div className="grid lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
            Download our app to get most out of it
          </h1>
          <p className="text-lg font-normal text-secondaryTextGray md:text-xl">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex items-center gap-10">
            <Image
              src="/download/appstore.webp"
              alt="app-store"
              width={150}
              height={150}
              loading="lazy"
              className="select-none aspect-auto object-contain"
            />
            <Image
              src="/download/googleapp.webp"
              alt="Google-Play"
              width={150}
              height={150}
              loading="lazy"
              className="select-none aspect-auto object-contain"
            />
          </div>
        </div>
        <div className="pointer-events-none hidden lg:block w-full h-full">
          <Image
            src="/download/app-preview.webp"
            alt="app-preview"
            width={800}
            height={800}
            loading="lazy"
            className="aspect-auto w-full h-full object-cover absolute bottom-0 right-0 "
          />
        </div>
      </div>
    </section>
  );
}
