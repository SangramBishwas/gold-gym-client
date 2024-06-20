import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../DashboardTitle";
import { Label, Table, Textarea } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
const AppliedTrainers = () => {
    const [trainerEmail, setTrainerEmail] = useState(null)
    const axiosSecure = useAxios();
    const [openModal, setOpenModal] = useState(false);
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/requests')
            return res.data
        }
    })
    const handleConfirmRequest = (email, id) => {
        axiosSecure.post(`/request-confirm/${email}`)
            .then(res => {
                const result = res.data;
                if (result.insertedId) {
                    axiosSecure.patch(`/users&trainer/${email}`)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.modifiedCount > 0) {
                                axiosSecure.delete(`/request/${id}`)
                                    .then(res => {
                                        const result = res.data;
                                        if (result.deletedCount > 0) {
                                            setOpenModal(false);
                                            Swal.fire({
                                                position: "center",
                                                icon: "success",
                                                title: `Request has been accepted`,
                                                showConfirmButton: false,
                                                timer: 3000
                                            });
                                        }
                                        refetch();
                                    })
                            }
                        })
                }

            })
    }
    const handleDeleteRequest = (id, email) => {
        setTrainerEmail(email)
        setOpenModal(true)
        axiosSecure.delete(`/request/${id}`)
            .then(res => {
                const result = res.data;
                if (result.deletedCount > 0) {
                    toast('Request has been deleted')
                }
                refetch();
            })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const feedback = {
            email: trainerEmail,
            message: form.get('feedback')
        }
        axiosSecure.post('/feedback', feedback)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your feedback has been sent`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    setOpenModal(false)
                }
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
                                    <button onClick={() => handleConfirmRequest(request.email, request._id)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Confirm
                                    </button>
                                    <button onClick={() => handleDeleteRequest(request._id, request.email)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
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

                                        </div>
                                        <form onSubmit={handleOnSubmit}>
                                            <Textarea id="comment"
                                                name="feedback"
                                                placeholder="Give a feedback..." required rows={4} />
                                            <Button className="my-5 mx-auto" type="submit">Send</Button>
                                        </form>
                                    </Modal.Body>
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