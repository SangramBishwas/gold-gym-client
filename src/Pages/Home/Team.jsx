import { Card } from "flowbite-react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import trainer1 from "../../assets/trainer-01.jpg"
import trainer2 from "../../assets/trainer-02.jpg"
import trainer3 from "../../assets/trainer-03.jpg"
const Team = () => {
    return (
        <div>
            <SectionTitle
                heading={"Our Dedicated Team"}
                subHeading={"Here is our teams and team leader."}></SectionTitle>
            <div className="flex flex-col items-center space-y-6 lg:space-y-10">
                <Card className="max-w-sm" imgSrc={trainer2} horizontal>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Cross Fitness Mapping
                    </h3>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Kemo Paul
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <div className="flex gap-6 lg:gap-10 flex-col lg:flex-row">
                    <Card className="max-w-sm" imgSrc={trainer3} horizontal>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Body Build & Pump
                        </h3>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tim David
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="max-w-sm" imgSrc={trainer1} horizontal>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Yoga Master
                        </h3>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mitchel Clark
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Team;