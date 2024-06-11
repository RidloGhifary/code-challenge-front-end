"use client";

export default function Error({ reset }) {
  return (
    <section className="mx-auto h-dvh max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-mainColor selection:bg-mainColor selection:text-white lg:text-9xl">
          500
        </h1>
        <p className="highlightedText mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Something went wrong.
        </p>
        <p className="highlightedText mb-4 text-lg font-light text-secondaryTextGray">
          We are working on it.
        </p>
        <button
          onClick={() => reset()}
          className="my-4 inline-flex select-none rounded-lg bg-backgroundLightGray px-5 py-2.5 text-center text-sm font-medium">
          Try again
        </button>
      </div>
    </section>
  );
}
