import { Card } from "flowbite-react";
import SectionTitle from "../../Shared/SectionTitle";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";

const AllClasses = () => {
    const [search, setSearch] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axiosPublic(`/classes-search?search=${search}`)
        .then(res => setClasses(res.data))
    }, [search])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearch(searchValue);
    }
    return (
        <div>
            <SectionTitle heading={'All Classes'} subHeading={'You can find all classes here and You can search by any class name'}></SectionTitle>
            <form onSubmit={handleOnSubmit} className="max-w-md my-5 mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" name="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">

                {
                    classes.map(classe => <Card
                        key={classe._id}
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={classe.images}
                    >
                        <div className="flex justify-between items-center">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {classe.class_name}
                            </h5>
                            <p>Total Bookings: {classe.number_of_bookings}</p>
                        </div>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {classe.details}
                        </p>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default AllClasses;