import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Card, Rating } from "flowbite-react";
const Reviews = () => {
    const axiosPublic = useAxiosPublic();
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading={'Feedbacks'} subHeading={'We are very happy to share our user feedbacks in this and you can checkout'}>
            </SectionTitle>
            <div className="mx-5 md:mx-10 lg:mx-20">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper bg-gray-100 w-full"
                >
                    {
                        reviews.map((review) => <SwiperSlide key={review._id} className="p-5 md:p-10">
                            <Card className="w-full">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {review.name}
                                </h3>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {review.review}
                                </p>
                                <Rating>
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                    <Rating.Star filled={false} />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{review.rating}</p>
                                </Rating>
                            </Card>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </div>
    );
};

export default Reviews;