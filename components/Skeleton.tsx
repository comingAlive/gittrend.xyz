const Skeleton = () => {
  return (
    <div
      className="flex space-x-3 p-5 bg-white dark:bg-black border-l-8 rounded border-gray-500 mt-4"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex-none w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <div className="w-6/12 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="w-3/12 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="w-3/12 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="w-10/12 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="w-7/12 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>
    </div>
  );
};
export default Skeleton;
