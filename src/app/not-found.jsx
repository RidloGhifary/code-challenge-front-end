"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="mx-auto h-dvh max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-mainColor selection:bg-mainColor selection:text-white lg:text-9xl">
          404
        </h1>
        <p className="highlightedText mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Something is missing.
        </p>
        <p className="highlightedText mb-4 text-lg font-light text-secondaryTextGray">
          Sorry, we can&lsquo;t find that page. You&lsquo;ll find lots to
          explore on the home page.
        </p>
        <button
          onClick={() => router.back()}
          className="my-4 inline-flex select-none rounded-lg bg-backgroundLightGray px-5 py-2.5 text-center text-sm font-medium"
        >
          Back to Previous Url
        </button>
      </div>
    </section>
  );
}
