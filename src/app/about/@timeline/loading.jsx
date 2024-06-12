export default function Loading() {
  return (
    <div className="p-4 py-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-2 justify-center items-center">
        <div className="bg-gray-200 rounded-md animate-pulse w-full h-52" />
        <div className="bg-gray-200 rounded-md animate-pulse w-full h-52" />
      </div>
    </div>
  );
}
