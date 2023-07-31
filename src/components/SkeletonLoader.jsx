const SkeletonLoader = () => (
    <div className="h-screen overflow-hidden bg-white px-4 md:px-24">
        <div className="flex justify-between items-center gap-8 pt-10">
            <div className="skeleton-loader w-1/3 h-80 " />
            <div className="bg-white w-2/3 h-80">
                <div className="skeleton-loader h-24 mb-10" />
                <div className="skeleton-loader h-full" />
            </div>
        </div>
    </div>
);

export default SkeletonLoader;