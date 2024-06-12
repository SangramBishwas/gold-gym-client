import { Button, Card } from "flowbite-react";
import SectionTitle from "../../Shared/SectionTitle";
import useTrainers from "../../Hooks/useTrainers";
import { Link } from "react-router-dom";

const AllTrainer = () => {
    const [trainers] = useTrainers()
    return (
        <div>
            <SectionTitle heading={"All Trainers"}
            ></SectionTitle>
            <div className="grid grid-cols-1 my-5 md:my-10 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                {
                    trainers.map(trainer => <Card key={trainer._id} className="max-w-sm">
                        <div className="flex gap-2 items-center text-gray-700 dark:text-gray-400">
                            <img src={trainer.image} height={64} width={64} alt="" className="rounded" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {trainer.name}
                            </h5>
                        </div>
                        <div className="flex justify-between text-gray-700 dark:text-gray-400">
                            <span>Years of Exprience: </span>
                            {trainer.exprience}
                        </div>
                        <div className="flex justify-between text-gray-700 dark:text-gray-400">
                            <span>Available slots: </span>
                            {trainer.available_times.length}
                        </div>
                        <Link to={`/trainers/${trainer._id}`}>
                            <Button>
                                know more
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </Link>

                    </Card>)
                }

            </div>
        </div>
    );
};

export default AllTrainer;