import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../DashboardTitle";
import { Label, Table, Textarea } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
const AppliedTrainers = () => {
    const axiosSecure = useAxios();
    const [openModal, setOpenModal] = useState(false);
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/requests')
            return res.data
        }
    })
    const handleConfirmRequest = (email) => {
        axiosSecure.post(`/request-confirm/${email}`)
            .then(res => {
                const result = res.data;
                if (result.insertedId) {
                    axiosSecure.patch(`/users&trainer/${email}`)
                        .then(res => console.log(res.data))
                    axiosSecure.delete(`/request/${email}`)
                        .then(res => {
                            refetch();
                            if (res.data.deletedCount > 0) {
                                toast('Confirmed Successfully')
                            }
                        })

                }
                
            })
    }
    const handleDeleteRequest = (id) => {
        axiosSecure.delete(`/request/${id}`)
        .then(res => {
            const result = res.data;
            if(result.deletedCount > 0){
                setOpenModal(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your request has been sent`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
            refetch();
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
                                    <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Reject
                                    </button>

                                </Table.Cell>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header>Details Of {request.name}</Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-4">
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex">Trainer Name: {request.name}</div>
                                                <div className="flex"><h5>Email: {request.email}</h5></div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex">
                                                    <h5>Exprience: {request.exprience}</h5>
                                                </div>
                                                <div className="flex">Age: {request.age}</div>
                                            </div>
                                            <div className="mx-auto block">
                                                <Label htmlFor="comment" value="Your Feedback" />
                                            </div>
                                            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="mx-auto">
                                        <Button onClick={() => handleDeleteRequest(request._id)}>Send</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>

        </div>
    );
};

export default AppliedTrainers;