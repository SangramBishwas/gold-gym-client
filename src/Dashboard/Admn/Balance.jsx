import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
const Balance = () => {
    const axiosPublic = useAxiosPublic();
    const [openModal, setOpenModal] = useState(false);
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payments');
            return res.data;
        }
    })
    const totalPrice = payments.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice);
    return (
        <div>
            <DashboardTitle heading={`Remaining Balance: ${totalPrice}$`}></DashboardTitle>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Trainer</Table.HeadCell>
                        <Table.HeadCell>Package</Table.HeadCell>
                        <Table.HeadCell>Price($)</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            payments.map((payment, index) => <Table.Row key={payment._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {payment.name}
                                </Table.Cell>
                                <Table.Cell>{payment.trainerName}</Table.Cell>
                                <Table.Cell>{payment.package}</Table.Cell>
                                <Table.Cell>{payment.price}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Details
                                    </button>

                                </Table.Cell>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header>Details Of {payment.name}</Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-4">
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex">
                                                    <h5>Email: {payment.email}</h5>
                                                </div>
                                                <div className="flex">Classes: {payment.classes}</div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex"><h5>Slot: {payment.slot}</h5></div>
                                                <div className="flex">Admission Date: {payment.date.slice(0, 10)}</div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="mx-auto">
                                        <Button onClick={() => setOpenModal(false)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
            <div className="my-10">
                <DashboardTitle heading={'Subscribers VS Members'}></DashboardTitle>
            </div>
        </div>
    );
};

export default Balance;