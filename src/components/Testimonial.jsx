import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Quote } from "lucide-react";
import client from "@/utils/contentful";
import moment from "moment";

async function getEntries() {
  try {
    const entries = await client.getEntries({
      content_type: "testimonialCarrental",
    });

    const sanitizedEntries = entries.items.map((entry) => {
      const imageUrl = entry.fields.userImage.fields.file.url;
      const id = entry.sys.id;
      const { username, comment, createdAt } = entry.fields;
      return { id, username, comment, createdAt, imageUrl };
    });

    return sanitizedEntries;
  } catch (err) {
    console.log(err);
  }
}

export default async function Testimonial() {
  const entries = await getEntries();

  return (
    <section className="-mt-16 space-y-12 bg-backgroundLightGray p-4 py-16 md:px-14">
      <SectionTitle
        title="Client's Testimonials"
        subTitle="Reviewed by People"
        description="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
      />

      <div className="grid items-center justify-center gap-4 md:grid-cols-2">
        {entries?.map((entry) => (
          <div key={entry?.id} className="rounded-md bg-white p-8 shadow-md">
            <p className="line-clamp-3 font-medium text-black">
              {entry?.comment}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={`https:${entry?.imageUrl}`}
                  alt={entry?.username}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="aspect-square w-12 h-12 rounded-full object-cover object-center"
                />
                <div>
                  <p className="text-lg font-medium">{entry?.username}</p>
                  <time className="block text-sm text-secondaryTextGray">
                    {moment(entry?.createdAt).format("MM-DD-YYYY")}
                  </time>
                </div>
              </div>
              <Quote size={60} color="#f47920" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
