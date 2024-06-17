import Swal from "sweetalert2";
import { FileInput, Label, TextInput } from "flowbite-react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import Select from 'react-select'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const BeTrainer = () => {
    const { user } = useAuth();
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    // const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();
    const Days = [
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Firday', label: 'Firday' }
    ]
    const Times = [
        { value: '08:00am to 10:00am', label: '08:00am to 10:00am' },
        { value: '09:00am to 11:00am', label: '09:00am to 11:00am' },
        { value: '11:00am to 01:00pm', label: '11:00am to 01:00pm' },
        { value: '3:00pm to 5:00am', label: '3:00pm to 5:00am' },
        { value: '07:00pm to 09:00pm', label: '07:00pm to 09:00pm' }
    ]

    const handleSelectedDays = (selected) => {
        const days = selected.map(day => day.value);
        setSelectedDays(days);
    };
    const handleSelectedTimes = (selected) => {
        const times = selected.map(time => time.value)
        setSelectedTimes(times);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const photo = form.get('image');
        const imageFile = { image: photo };
        const res = await axiosPublic.post(imageHostingAPI, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        const resData = res.data;
        console.log(resData)

        if (res.data.success) {
            const request = {
                name: form.get('name'),
                email: user.email,
                age: form.get('age'),
                image: resData.data.display_url,
                skills: [form.get('skills')],
                available_days: selectedDays,
                available_times: selectedTimes,
                exprience: form.get('exprience'),
                description: form.get('description'),
            }
            console.log(request);
            const res = await axiosPublic.post('/requests', request);
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your request has been sent`,
                    showConfirmButton: false,
                    timer: 2500
                });
                // navigate('/')
            }

        }
    }
    return (
        <div className="px-10 md:px-20 lg:px-36">
            <SectionTitle
                heading={"Be A Trainer"}
                subHeading={"If You want to be a trainer you have to send trainer request through this form. So fill up this for and send your request"}
            ></SectionTitle>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FullName</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" defaultValue={user?.email} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Age</label>
                        </div>
                        <div className="relative z-0 w-full group">
                            <input type="text" name="skills" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skills</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-10 w-full mb-5 group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Days</label>
                            <Select
                                onChange={handleSelectedDays}
                                isMulti
                                name="days"
                                options={Days}
                                classNamePrefix="select" required />
                        </div>
                        <div className="relative z-10 w-full mb-5 group">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available Times(any 3 times)</label>
                            <Select
                                onChange={handleSelectedTimes}
                                isMulti
                                name="times"
                                options={Times}
                                classNamePrefix="select" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mb-5">
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Exprience" />
                            </div>
                            <TextInput id="base" type="number" name="exprience" sizing="md" />
                        </div>
                        <div className="w-full space-y-1">
                            <div>
                                <Label htmlFor="large-file-upload" value="Image" />
                            </div>
                            <FileInput name="image" sizing="lg" required/>
                        </div>
                    </div>

                    <div className="mb-5 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio Data</label>
                        <input type="text" name="description" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-10">Send Request</button>
                </form>
            </div >
        </div >
    );
};

export default BeTrainer;