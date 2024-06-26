import { Link, useParams } from "react-router-dom";

import { IoCloudDone } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Button } from "flowbite-react";
import { useState } from "react";

const Details = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedSlot, setSelectedSlot] = useState(null);
    const { id } = useParams();
    const { data: trainer = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trainers/${id}`);
            return res.data
        }
    })
    const slots = trainer.available_times;
    const handleSelectSlot = (slot) => {
        setSelectedSlot(slot);
    };
    return (
        <div className="py-10 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
                <img src={trainer.image} width={500} height={800} alt="" />
                <div className="flex flex-col w-full space-y-3">
                    <div className="space-y-3">
                        <h2 className="text-center font-bold text-xl md:text-2xl">Details of {trainer.name}</h2>
                        <h4 className="text-center font-semibold">Exprience: {trainer.exprience}+</h4>
                    </div>
                    <p>{trainer.description}</p>
                    <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-3">
                        <h4 className="font-semibold">Email: {trainer.email}</h4>
                        <h4 className="font-semibold">Age: {trainer.age}</h4>
                    </div>
                    {
                        trainer?.skills?.map((skill, index) => <div key={index} className="flex flex-col items-center lg:flex-row justify-between border-b-2 space-y-3 pb-3">
                            <h2 className="font-bold text-xl">Skills</h2>
                            <div className="">
                                <span key={index} className="flex items-center text-lg"><IoCloudDone className="text-xl" />{skill}</span>
                            </div>
                        </div>)
                    }
                    <div>
                        <h2 className="font-bold text-xl text-center pb-2 md:text-left">Select A Slot</h2>
                        <div className="flex flex-col items-center lg:flex-row justify-between border-b-2 py-3 space-y-4 md:space-y-0">
                            {
                                slots?.map((slot, index) => <Button key={index} onClick={() => handleSelectSlot(slot)}>{slot}</Button>)
                            }
                        </div>
                    </div>

                    {selectedSlot &&
                        <Link to='/booked&trainer' state={{
                            name: `${trainer.name}`,
                            trainer_Id: `${trainer._id}`,
                            selectedSlot: selectedSlot,
                            classes: `${trainer.available_days}`,
                        }}> <Button className="mx-auto w-1/2 my-3" gradientDuoTone="greenToBlue">Book Now</Button></Link>
                    }
                </div>
            </div>
            <Link to="/be&trainer" className="w-full h-full">
                <Button className="w-1/2 mx-auto font-bold my-10 lg:my-16">To Become A Trainer</Button>
            </Link>
        </div>

    );
};

export default Details;