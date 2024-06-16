import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { Table } from "flowbite-react";
import toast from "react-hot-toast";
const AppliedTrainers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/requests')
            return res.data
        }
    })
    const handleConfirmRequest = (email) => {
        axiosPublic.post(`/request-confirm/${email}`)
            .then(res => {
                const result = res.data;
                if (result.insertedId) {
                    axiosPublic.patch(`/users&trainer/${email}`)
                        .then(res => console.log(res.data))
                    axiosPublic.delete(`/request/${email}`)
                        .then(res => {

                            if (res.data.deletedCount > 0) {
                                refetch();
                            }
                        })

                }
                toast('Confirmed Successfully')
            })
    }
    return (
        <div>
            <DashboardTitle heading={'Trainer Requests'}></DashboardTitle>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Age</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            requests.map((request, index) => <Table.Row key={request._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {request.name}
                                </Table.Cell>
                                <Table.Cell>{request.age}</Table.Cell>
                                <Table.Cell>{request.email}</Table.Cell>
                                <Table.Cell className="flex flex-col md:flex-row gap-3 md:gap-5">
                                    <button onClick={() => handleConfirmRequest(request.email)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Confirm
                                    </button>
                                    <button className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Reject
                                    </button>

                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AppliedTrainers;