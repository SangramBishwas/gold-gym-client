import Select from 'react-select'
// import useAuth from "../../Hooks/useAuth";
// import useTrainers from "../../Hooks/useTrainers";
import { useState } from 'react';
import DashboardTitle from '../DashboardTitle';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import useTrainerApi from '../../Hooks/useTrainerApi';

const AddSlots = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const axiosSecure = useAxios();
    const [trainer] = useTrainerApi();
    console.log(trainer)
    // const [trainers] = useTrainers();
    // const { user } = useAuth();
    // const trainer = trainers.find(trainee => trainee.email === user?.email);
    const Days = [
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thirsday', label: 'Thirsday' }
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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const updateSlots = {
            available_days: selectedDays,
            available_times: selectedTimes,
        };
        console.log(updateSlots)
        const res = await axiosSecure.put(`/trainers/${trainer?.email}`, updateSlots)
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your slots has been updated`,
                showConfirmButton: false,
                timer: 2500
            });
        }
    }
    return (
        <div className="px-10 md:px-20 lg:px-36">
            <DashboardTitle
                heading={"Update Your Slot"}
            ></DashboardTitle>
            <div className="w-full">
                <form onSubmit={handleOnSubmit} className="mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={trainer?.name} readOnly />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FullName</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" defaultValue={trainer?.email} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={trainer?.age} readOnly />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Age</label>
                        </div>
                        <div className="relative z-0 w-full group">
                            <input type="text" name="skills" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={trainer?.skills} readOnly />
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

                    <div className="mb-5 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio Data</label>
                        <input type="text" name="description" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={trainer?.description} readOnly />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-10">Send Request</button>
                </form>
            </div >
        </div >
    );
};

export default AddSlots;