import useSubscriber from "../../Hooks/useSubscriber";
import DashboardTitle from "../DashboardTitle";
import { Table } from "flowbite-react";
const AllSubscribers = () => {
    const [subscribers] = useSubscriber();
    return (
        <div>
            <DashboardTitle heading={'All Subscribers'}></DashboardTitle>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            #
                        </Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Plan</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            subscribers.map((subscriber, index) => <Table.Row key={subscriber._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {subscriber.name}
                                </Table.Cell>
                                <Table.Cell>1st months(free)</Table.Cell>
                                <Table.Cell>{subscriber.email}</Table.Cell>
                                <Table.Cell>
                                    <span className="font-medium text-cyan-600 hover:underline hover:cursor-pointer dark:text-cyan-500">
                                        Remove
                                    </span>
                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllSubscribers;