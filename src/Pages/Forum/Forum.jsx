import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import { Card } from "flowbite-react";

const Forum = () => {
    const axiosPublic = useAxiosPublic();
    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/posts')
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading={'All Community Posts'}></SectionTitle>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                {
                    posts.map(post => <Card key={post._id} className="w-full relative">
                        <div className="flex flex-col">
                            <img
                                alt="Bonnie image"
                                height="64"
                                src={post.image}
                                width="64"
                                className="rounded-md shadow-lg absolute top-2 left-2"
                            />
                            <span className="absolute right-2 top-2">{post.date}</span>
                            <div className="absolute top-2 left-20">
                                <h5 className="text-lg font-medium text-gray-900 dark:text-white">{post.name}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{post.role}</span>
                            </div>
                            <div className="pt-10 flex space-x-3 lg:mt-6">
                                <p className="">{post.post}</p>
                            </div>
                        </div>
                    </Card>)
                }

            </div>
        </div>
    );
};

export default Forum;