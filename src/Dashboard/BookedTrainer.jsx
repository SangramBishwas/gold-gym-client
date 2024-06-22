import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import DashboardTitle from "./DashboardTitle";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

const BookedTrainer = () => {
    const [ratingValue, SetRatingValue] = useState();
    const axiosSecure = useAxios();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: payment = [] } = useQuery({
        queryKey: [user?.email, 'payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    const { data: trainer = [] } = useQuery({
        queryKey: [payment.trainerId, 'trainer'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trainers/${payment.trainerId}`)
            return res.data
        }
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const feedback = {
            name: user?.displayName,
            email: user?.email,
            review: form.get('message'),
            rating: ratingValue
        }
        axiosSecure.post('/reviews', feedback)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your review has been sent`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
    }

    const handleChange = (e) => {
        let inputValue = parseInt(e.target.value);

        if (isNaN(inputValue)) {
            inputValue = 0;
        } else if (inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 5) {
            inputValue = 5;
        }

        SetRatingValue(inputValue)
    };
    return (
        <div>
            <>
                <DashboardTitle heading={'Your Trainer'}></DashboardTitle>
                <div className="mx-auto my-10 flex flex-col gap-y-5 lg:flex-row lg:justify-normal lg:gap-10">
                    <img src={trainer.image} alt="trainer-image" />
                    <div className="space-y-4 lg:space-y-1">
                        <h3 className="text-3xl">{trainer.name}</h3>
                        <div className="">
                            <p>{trainer.age} years old</p>
                        </div>
                        <div className="">
                            <h3 className="font-semibold text-xl">Description</h3>
                            <p>
                                {trainer.description}
                            </p>
                        </div>
                        <div className="border-y-2 flex gap-5 py-3">
                            <h5 className="font-semibold">Skills</h5>:<span>{trainer.skills}</span>
                        </div>
                        <div className="border-b-2 flex gap-5 py-3">
                            <h5 className="font-semibold">Days</h5>:
                            {
                                trainer.available_days?.map((day, index) => <span key={index}>{day}</span>)
                            }
                            {/* <span>{trainer.available_days[0]}</span>
                            <span>{trainer.available_days[1]}</span>
                            <span>{trainer.available_days[2]}</span> */}
                        </div>
                        <div className="flex gap-5 py-3">
                            <h5 className="font-semibold">Slots</h5>:
                            {
                                trainer.available_times?.map((slot, index) => <span key={index}>{slot}</span>)
                            }
                        </div>
                        <span className="py-2">Email: {trainer.email}</span>
                    </div>
                </div>
                <DashboardTitle heading={'Give Your Feedback'}></DashboardTitle>
                <form onSubmit={handleOnSubmit} className="mx-auto">
                    <div className="mb-2 flex items-center gap-5 w-full">
                        <div>
                            <Label htmlFor="small" value="Small input" />
                        </div>
                        <TextInput onChange={handleChange} id="small" className="w-1/5" type="number" min="0" max="5" sizing="sm" value={ratingValue} />
                    </div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your feedback message" />
                    </div>
                    <Textarea id="comment" name="message" placeholder="Give a message..." required rows={4} />
                    <Button className="my-3" type="submit">Send</Button>
                </form>
            </>
        </div>
    );
};

export default BookedTrainer;