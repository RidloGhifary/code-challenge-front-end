import Image from "next/image";

export default function ValuesCard({ title, description, imagePath }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src={imagePath}
        alt="rating"
        width={100}
        height={100}
        loading="lazy"
        className="aspect-square w-24 h-24 object-contain"
      />
      <h1 className="my-3 text-2xl font-bold text-mainColor">{title}</h1>
      <p className="w-[70%] text-secondaryTextGray md:w-full">{description}</p>
    </div>
  );
}
