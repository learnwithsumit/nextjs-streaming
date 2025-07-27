import CardSkeleton from "@/components/ui/card-skeleton";

export default function Loading() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 py-6">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
