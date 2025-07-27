import getTools from "@/lib/getTools";
import { Suspense, use } from "react";
import IconCard from "./icon-card";
import CardSkeleton from "./ui/card-skeleton";

const ToolsCard = ({ toolPromise }) => {
    const tool = use(toolPromise);

    return <IconCard tool={tool} />;
};

const ToolsCards = async () => {
    const toolsPromise = await getTools();

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 py-6">
                {toolsPromise.map((toolPromise, index) => (
                    <Suspense fallback={<CardSkeleton />} key={index}>
                        <ToolsCard toolPromise={toolPromise} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default ToolsCards;
