import Image from "next/image";

export default function ReasonCard({ title, description, imagePath }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={imagePath}
        alt={title}
        width={150}
        height={150}
        loading="lazy"
        className="aspect-square w-24 h-24 object-contain"
      />
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-sm font-light text-secondaryTextGray">
          {description}
        </p>
      </div>
    </div>
  );
}
