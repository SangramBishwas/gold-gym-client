import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import DashboardTitle from "./DashboardTitle";
import { Button, Modal, Table } from "flowbite-react";
import { FaEyeSlash } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import { useState } from "react";
const ActivityLog = () => {
    const [openModal, setOpenModal] = useState(false);
    const { user } = useAuth();
    const axiosSecure = useAxios()
    const { data: request = [] } = useQuery({
        queryKey: [user?.email, 'request'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requests/${user?.email}`);
            return res.data;
        }
    })
    const { data: feedback = [] } = useQuery({
        queryKey: [user?.email, 'feedback'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/feedback/${user?.email}`)
            return res.data;
        }
    })
    console.log(feedback)
    return (
        <div>
            <DashboardTitle heading={'Your Application for a trainer'}></DashboardTitle>
            <h2>{request.name}</h2>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Age</Table.HeadCell>
                        <Table.HeadCell className="p-4">
                            Exprience
                        </Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>

                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {request.name}
                            </Table.Cell>
                            <Table.Cell>{request.age}</Table.Cell>
                            <Table.Cell>{request.exprience} years</Table.Cell>
                            <Table.Cell>{request.email}</Table.Cell>
                            <Table.Cell className="flex flex-col md:flex-row gap-3 md:gap-5 space-x-1">
                                {!feedback ? <span className="bg-black text-white text-base py-1 px-2 rounded">Pending</span>
                                    : <div className="flex gap-3 items-center">
                                        <span className="bg-red-700 text-white text-base py-1 px-2 rounded">Rejected</span>
                                        <Tooltip id="my-tooltip" />
                                        <span onClick={() => setOpenModal(true)}
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="feedback"
                                            data-tooltip-place="top" className="cursor-pointer"><FaEyeSlash className="text-3xl" /></span>
                                    </div>
                                }

                            </Table.Cell>
                            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                <Modal.Header>Details Of {request.name}</Modal.Header>
                                <Modal.Body>
                                    <div className="text-center">
                                        {feedback.message}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="mx-auto">
                                    <Button onClick={() => setOpenModal(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ActivityLog;