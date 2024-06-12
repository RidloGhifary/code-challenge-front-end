export default function Loading() {
  return (
    <div className="space-y-3 py-16 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="bg-gray-400 w-[50%] h-20 rounded-md animate-pulse" />
      <div className="bg-gray-400 w-full h-20 rounded-md animate-pulse" />
      <div className="bg-gray-400 w-[50%] h-20 rounded-md animate-pulse" />
      <div className="bg-gray-400 w-full h-20 rounded-md animate-pulse" />
      <div className="bg-gray-400 w-[70%] h-20 rounded-md animate-pulse" />
    </div>
  );
}
