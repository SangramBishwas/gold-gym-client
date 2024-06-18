import Swal from "sweetalert2";
import useTrainers from "../../Hooks/useTrainers";
import DashboardTitle from "../DashboardTitle";
import { Card } from "flowbite-react";
import useAxios from "../../Hooks/useAxios";
const AllTrainers = () => {
    const axiosSecure = useAxios()
    const [trainer, refetch] = useTrainers();
    const handleDelete = (id, email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/trainers/${id}`)
                    .then(res => {
                        const result = res.data;
                        console.log(result)
                        if (result.deletedCount > 0) {
                            axiosSecure.patch(`/users&member/${email}`)
                                .then(res => {
                                    console.log(res.data)
                                    if (res.data.modifiedCount > 0) {
                                        refetch();
                                        Swal.fire({
                                            title: "Deleted!",
                                            text: "Your file has been deleted.",
                                            icon: "success"
                                        });

                                    }
                                })

                        }
                    })
            }
        });
    }
    return (
        <div>
            <DashboardTitle heading={"All Trainers"}></DashboardTitle>
            <div className="grid grid-cols-1 my-5 md:my-10 md:grid-cols-3 lg:grid-cols-3 px-5 md:px-10 lg:px-5 gap-8 md:gap-16 lg:gap-10">
                {
                    trainer.map(trainee => <Card key={trainee._id} className="md:w-full">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                alt={trainee.name}
                                height="96"
                                src={trainee.image}
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{trainee.name}</h5>
                            <div className="flex space-between">
                                {
                                    trainee?.skills.map((skill, index) => <span key={index} className="text-sm text-gray-500 dark:text-gray-400">{skill}</span>)
                                }

                            </div>

                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                                <button onClick={() => handleDelete(trainee._id, trainee.email)}
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </Card>)
                }
            </div>


        </div>
    );
};

export default AllTrainers;