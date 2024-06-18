import DashboardTitle from "../DashboardTitle";
import { Label, Table, Textarea } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import useTrainerApi from "../../Hooks/useTrainerApi";

const ManageSlots = () => {
    const [openModal, setOpenModal] = useState(false);
    const [trainer] = useTrainerApi();
    console.log(trainer.available_times)
    return (
        <div>
            <DashboardTitle heading={'Manage Your Slots'}></DashboardTitle>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Slot</Table.HeadCell>
                        <Table.HeadCell>More Info</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            trainer?.available_times?.map((slot, index) => <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {trainer.name}
                                </Table.Cell>
                                <Table.Cell>{slot}</Table.Cell>
                                <Table.Cell>
                                    <button className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        More Info
                                    </button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => setOpenModal(true)} className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Delete
                                    </button>

                                </Table.Cell>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header>Details Of {slot.name}</Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-4">
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex">Trainer Name: {slot.name}</div>
                                                <div className="flex"><h5>Email: {slot.email}</h5></div>
                                            </div>
                                            <div className="flex flex-col md:flex-row justify-around">
                                                <div className="flex">
                                                    <h5>Exprience: {slot.exprience}</h5>
                                                </div>
                                                <div className="flex">Age: {slot.age}</div>
                                            </div>
                                            <div className="mx-auto block">
                                                <Label htmlFor="comment" value="Your Feedback" />
                                            </div>
                                            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
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

        </div>
    );
};

export default ManageSlots;