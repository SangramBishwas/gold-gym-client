import SectionTitle from "../../Shared/SectionTitle";
import { Card } from "flowbite-react";
import image from "../../assets/sliders-3.jpg";
const Feature = () => {
    return (
        <div>
            <SectionTitle
                heading={"Our Feature"}
                subHeading={"We are providing some great feature including"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae ut iste culpa fuga voluptatem obcaecati eaque rerum eius nihil, commodi rem quasi dolorum nesciunt quia pariatur quibusdam dolores quisquam.</p>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Feature;