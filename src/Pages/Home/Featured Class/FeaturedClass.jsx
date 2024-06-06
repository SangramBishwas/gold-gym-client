import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Card } from "flowbite-react";

const FeaturedClass = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featuredClasses = [] } = useQuery({
        queryKey: ['feturedClasses'],
        queryFn: async () => {
            const res = await axiosPublic('/featured&classes');
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle heading={'Featured Classes'} subHeading={'We are providing in daily basis with our highest priority to each member. You can book you favourite classes after taking membership'}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-y-8 lg:gap-y-16">
                {
                    featuredClasses.map(featuredClass => <Card
                        key={featuredClass._id}
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={featuredClass.images}
                    >
                        <div className="flex justify-between items-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {featuredClass.class_name}
                        </h5>
                        <p>Total Bookings: {featuredClass.number_of_bookings}</p>
                        </div>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {featuredClass.details}
                        </p>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default FeaturedClass;