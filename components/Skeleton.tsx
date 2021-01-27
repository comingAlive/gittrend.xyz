import { memo } from "react";

const Skeleton = memo(() => {
  return (
    <div
      className="flex p-5 mt-4 md:mt-2 md:gap-2 space-x-3 bg-white rounded border border-l-8 border-gray-500 dark:bg-black"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex-none w-8 h-8 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
      <div className="space-y-2 w-full">
        <div className="flex justify-between">
          <div className="w-4/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
          <div className="w-3/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
        </div>
        <div className="flex justify-between">
          <div className="w-3/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
          <div className="w-2/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
        </div>
        <div className="w-9/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
        <div className="w-9/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
        <div className="w-7/12 h-4 bg-gray-200 rounded animate-pulse dark:bg-gray-800" />
      </div>
    </div>
  );
});
export default Skeleton;
