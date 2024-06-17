import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import useSubscriber from "../../Hooks/useSubscriber";
const Balance = () => {
    const axiosPublic = useAxiosPublic();
    const [subscribers] = useSubscriber()
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
    const data = [
        {
            name: 'Subscribers',
            count: subscribers.length
        },
        {
            name: 'Member',
            count: payments.length
        }
    ]

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            // eslint-disable-next-line react/prop-types
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

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

                <div className="flex lg:justify-center py-5">
                        <BarChart className="w-full h-full" width={1080} height={480} data={data}>
                            <Tooltip />
                            <Bar dataKey="count" fill="#0088FE" shape={<TriangleBar />} label={{ position: 'top' }} />
                            <XAxis dataKey="name"></XAxis>
                            <YAxis></YAxis>
                        </BarChart>

                </div>

            </div>
        </div>
    );
};

export default Balance;