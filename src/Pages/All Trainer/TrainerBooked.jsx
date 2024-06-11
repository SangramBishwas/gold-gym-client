import { useLocation } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";

const TrainerBooked = () => {
    const [openModal, setOpenModal] = useState(false);
    // const [payement, setPayment] = useState(0);
    const location = useLocation();
    const trainer = location.state;
    console.log(trainer)

    const hadleJoinNow = (p) => {
        console.log(p);
        setOpenModal(true);
        // setPayment(p);
    }
    return (
        <div>
            <SectionTitle heading={'Booked Your Trainer'}></SectionTitle>
            <div className="grid grid-cols-1 my-5 md:my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                <Card className='max-w-sm'>
                    <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">Basic</h5>
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{trainer.name}</h3>
                        <p>your slot: {trainer.selectedSlot}</p>
                    </div>
                    <div className="flex gap-2"><span className="font-semibold">Class Day:</span> {trainer.classes}</div>
                    <div className="flex items-baseline text-gray-800 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">20</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>

                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Access to gym facilities during
                                regular operating hours</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Use of cardio and strength
                                training equipment.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Access to locker rooms and
                                showers.</span>
                        </li>
                    </ul>
                    <button onClick={() => hadleJoinNow(20)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Join Now
                    </button>
                </Card>
                <Card className='max-w-sm'>
                    <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">Standard</h5>
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{trainer.name}</h3>
                        <p>your slot: {trainer.selectedSlot}</p>
                    </div>
                    <div className="flex gap-2"><span className="font-semibold">Class Day:</span> {trainer.classes}</div>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">50</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Access to gym facilities during
                                regular operating hours</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Access to group fitness classes
                                such as yoga, spinning, and
                                Zumba.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Use of additional amenities
                                like a sauna or steam room.
                            </span>
                        </li>
                    </ul>
                    <button onClick={() => hadleJoinNow(50)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                        Join Now
                    </button>
                </Card>
                <Card className='max-w-sm'>
                    <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">Premium</h5>
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{trainer.name}</h3>
                        <p>your slot: {trainer.selectedSlot}</p>
                    </div>
                    <div className="flex gap-2"><span className="font-semibold">Class Day:</span> {trainer.classes}</div>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">100</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">All benefits of the standard
                                membership.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Access to personal training
                                sessions with certified trainers.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Discounts on additional
                                services such as massage
                                therapy or nutrition
                                counseling.
                            </span>
                        </li>
                    </ul>
                    <button onClick={() => hadleJoinNow(100)}
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
                        Join Now
                    </button>
                </Card>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mx-auto w-1/2" onClick={() => setOpenModal(false)}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TrainerBooked;